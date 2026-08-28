# Duplicate checker backend

FastAPI service backing the `/tool` page — checks a found-persons
tracking CSV for rows that share a name, phone number, or passport
number.

## Run locally

```
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Then open `/tool` on the frontend and set the Backend API URL to
`http://localhost:8000`.

## Run the checker without the API

`dedupe.py` is a standalone script — no server needed:

```
python3 dedupe.py path/to/found-persons.csv
python3 dedupe.py path/to/found-persons.csv --json report.json
```

## Expected CSV columns

SN, Name, Found Location, Phone Number, Reported Time, Status, People
around (At found location), Last known location, Reported by /
Contact, Remarks / Additional Info, Date of birth, Age, Passport
number, Sex, Nationality.

Header spelling/punctuation is matched loosely (case- and
punctuation-insensitive), so small variations in the source sheet are
fine. Any column the script doesn't recognize is kept as-is rather
than dropped.

## Deploying

This is a plain FastAPI app with no framework-specific glue — deploy
it anywhere that runs Python (Render, Railway, Fly.io, a VPS, etc.)
and point the `/tool` page's Backend API URL at it. `main.py` allows
CORS from any origin since the endpoint only echoes back an analysis
of the file the caller uploaded.
