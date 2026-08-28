# Duplicate checker API

FastAPI service backing the `/tool` page — checks a found-persons
tracking CSV for rows that share a name, phone number, or passport
number.

**Production**: runs standalone on a VPS at
`https://api.found.kachhuwa.com` (systemd service
`rasuwa-flood-api.service` + nginx reverse proxy + Let's Encrypt,
following the same pattern as the other services on that box). `/tool`
is pointed at that URL by default.

`vercel.json` and the file-based `/api` routing convention are still
in place (`api/index.py` is the endpoint; `_dedupe.py` is a plain
helper module — the leading underscore keeps Vercel from also routing
it as its own function) but **deploying via Vercel didn't end up
working**: the function was registered and the routing rewrite got
requests to it, but it crashed on import (`FUNCTION_INVOCATION_FAILED`)
without a traceback we could get to in time. Worth revisiting later if
someone wants to move off the VPS, but the VPS deployment is what's
actually live.

## Local development

Run the whole site (static pages + this API) together with the Vercel CLI:

```
npm i -g vercel   # if you don't have it
vercel dev
```

Then open `/tool` — leave the Backend API URL field blank to call this
same origin, exactly like production.

### Without the Vercel CLI

```
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt uvicorn
cd api && uvicorn index:app --reload --port 8000
```

Then set the Backend API URL on `/tool` to `http://localhost:8000`.

## Run the checker without any server

`_dedupe.py` has no dependencies outside the standard library, so it
runs on its own:

```
python3 api/_dedupe.py path/to/found-persons.csv
python3 api/_dedupe.py path/to/found-persons.csv --json report.json
```

## CSV columns

No fixed set of columns is required — any CSV works. These are
recognized when present:

SN, Name, Found Location, Phone Number, Reported Time, Status, People
around (At found location), Last known location, Reported by /
Contact, Remarks / Additional Info, Date of birth, Age, Passport
number, Sex, Nationality.

Duplicate checks run on whichever of Name, Phone Number, and Passport
number the file actually has — a file missing one of those just skips
that check rather than failing.

Header spelling/punctuation is matched loosely (case- and
punctuation-insensitive), so small variations in the source sheet are
fine. Any column the script doesn't recognize is kept as-is rather
than dropped.
