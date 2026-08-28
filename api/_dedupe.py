"""
Duplicate checker for the found-persons tracking CSV.

No fixed set of columns is required — any CSV works. These are
recognized when present (header spelling/punctuation is matched
loosely, so minor variations are fine), and any other column is kept
as-is rather than dropped:

    SN, Name, Found Location, Phone Number, Reported Time, Status,
    People around (At found location), Last known location,
    Reported by / Contact, Remarks / Additional Info, Date of birth,
    Age, Passport number, Sex, Nationality

Normalizes each row, then flags rows that share a Name, a Phone Number,
or a Passport number with another row (blank values are never treated
as a match, and a file missing one of those three columns just skips
that check rather than failing). Usable as a CLI script or imported as a library (the
FastAPI app in index.py calls `analyze_csv` directly). Named with a
leading underscore so Vercel's /api file-based routing treats it as a
helper module rather than its own function — see index.py.

CLI usage:
    python _dedupe.py input.csv
    python _dedupe.py input.csv --json report.json
"""
import csv
import io
import json
import re
import sys

# Canonical field -> normalized (letters/digits only, lowercase) header spellings
# we should recognize. Add more variants here if a real sheet uses different wording.
HEADER_ALIASES = {
    "sn": "sn",
    "name": "name",
    "foundlocation": "found_location",
    "phonenumber": "phone",
    "phone": "phone",
    "reportedtime": "reported_time",
    "status": "status",
    "peoplearoundatfoundlocation": "people_around",
    "peoplearound": "people_around",
    "lastknownlocation": "last_known_location",
    "reportedbycontact": "reported_by",
    "reportedby": "reported_by",
    "contact": "reported_by",
    "remarksadditionalinfo": "remarks",
    "remarks": "remarks",
    "additionalinfo": "remarks",
    "dateofbirth": "dob",
    "dob": "dob",
    "age": "age",
    "passportnumber": "passport",
    "passport": "passport",
    "sex": "sex",
    "gender": "sex",
    "nationality": "nationality",
}

# Human-readable labels for the canonical fields, used in the report output
FIELD_LABELS = {
    "sn": "SN",
    "name": "Name",
    "found_location": "Found Location",
    "phone": "Phone Number",
    "reported_time": "Reported Time",
    "status": "Status",
    "people_around": "People around (At found location)",
    "last_known_location": "Last known location",
    "reported_by": "Reported by / Contact",
    "remarks": "Remarks / Additional Info",
    "dob": "Date of birth",
    "age": "Age",
    "passport": "Passport number",
    "sex": "Sex",
    "nationality": "Nationality",
}

REQUIRED_FOR_DEDUPE = ["name", "phone", "passport"]


def _header_key(header):
    return re.sub(r"[^a-z0-9]", "", (header or "").lower())


def map_headers(fieldnames):
    """Map each raw CSV header to a canonical field name. Unrecognized
    headers are kept as-is under their own key so no data is dropped."""
    mapping = {}
    for h in fieldnames or []:
        key = _header_key(h)
        mapping[h] = HEADER_ALIASES.get(key, key or h)
    return mapping


def normalize_name(v):
    return re.sub(r"\s+", " ", (v or "").strip()).casefold()


def normalize_phone(v):
    return re.sub(r"\D", "", v or "")


def normalize_passport(v):
    return re.sub(r"\s+", "", (v or "").strip()).upper()


def normalize_text(v):
    return re.sub(r"\s+", " ", (v or "").strip())


def load_rows(csv_text):
    """Parse CSV text into a list of raw dict rows plus 1-indexed row
    numbers (row 1 = header, so the first data row is row 2 — matches
    what you'd see if you opened the file in a spreadsheet)."""
    reader = csv.DictReader(io.StringIO(csv_text))
    header_map = map_headers(reader.fieldnames)
    rows = []
    for i, raw in enumerate(reader, start=2):
        row = {"row": i}
        for raw_key, value in raw.items():
            canon = header_map.get(raw_key, raw_key)
            row[canon] = normalize_text(value) if value else None
        rows.append(row)
    return rows, header_map


def analyze_rows(rows):
    """Group rows by normalized name / phone / passport and return only
    the groups with more than one row (i.e. the actual duplicates)."""
    missing_fields = [f for f in REQUIRED_FOR_DEDUPE if not any(f in r for r in rows)]

    def build_groups(field, normalizer):
        buckets = {}
        for r in rows:
            raw_val = r.get(field)
            norm = normalizer(raw_val)
            if not norm:
                continue
            buckets.setdefault(norm, {"value": raw_val, "rows": []})
            buckets[norm]["rows"].append(r)
        return [g for g in buckets.values() if len(g["rows"]) > 1]

    dup_names = build_groups("name", normalize_name)
    dup_phones = build_groups("phone", normalize_phone)
    dup_passports = build_groups("passport", normalize_passport)

    return {
        "total_rows": len(rows),
        "missing_fields": missing_fields,
        "duplicate_names": dup_names,
        "duplicate_phones": dup_phones,
        "duplicate_passports": dup_passports,
        "summary": {
            "duplicate_name_groups": len(dup_names),
            "duplicate_phone_groups": len(dup_phones),
            "duplicate_passport_groups": len(dup_passports),
            "rows_involved": len({
                r["row"]
                for g in (dup_names + dup_phones + dup_passports)
                for r in g["rows"]
            }),
        },
    }


def analyze_csv(csv_text):
    rows, header_map = load_rows(csv_text)
    result = analyze_rows(rows)
    result["header_map"] = header_map
    return result


def _print_group(title, groups):
    print(f"\n{title} ({len(groups)})")
    print("-" * len(f"{title} ({len(groups)})"))
    if not groups:
        print("  none")
        return
    for g in groups:
        print(f"  \"{g['value']}\" — {len(g['rows'])} rows")
        for r in g["rows"]:
            bits = [f"row {r['row']}"]
            if r.get("name"):
                bits.append(f"name={r['name']}")
            if r.get("phone"):
                bits.append(f"phone={r['phone']}")
            if r.get("passport"):
                bits.append(f"passport={r['passport']}")
            print(f"    - {', '.join(bits)}")


def main():
    if len(sys.argv) < 2:
        print("usage: python _dedupe.py <input.csv> [--json output.json]")
        sys.exit(1)

    path = sys.argv[1]
    with open(path, "r", encoding="utf-8-sig") as f:
        csv_text = f.read()

    result = analyze_csv(csv_text)

    if result["missing_fields"]:
        print(f"Note: no {', '.join(result['missing_fields'])} column in this file — skipping that duplicate check.")

    print(f"Total rows: {result['total_rows']}")
    _print_group("Duplicate names", result["duplicate_names"])
    _print_group("Duplicate phone numbers", result["duplicate_phones"])
    _print_group("Duplicate passport numbers", result["duplicate_passports"])

    if "--json" in sys.argv:
        out_path = sys.argv[sys.argv.index("--json") + 1]
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        print(f"\nWrote full report to {out_path}")


if __name__ == "__main__":
    main()
