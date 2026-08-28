# Duplicate checker API

FastAPI service backing the `/tool` page — checks a found-persons
tracking CSV for rows that share a name, phone number, or passport
number. Deployed as a Vercel Function using the [file-based `/api`
convention](https://vercel.com/docs/functions/runtimes/python/api-directory):
it deploys automatically with the rest of the site, no separate service
or `vercel.json` needed. `_dedupe.py` is a plain helper module (the
leading underscore keeps Vercel from also routing it as its own
function); `index.py` is the actual endpoint, reachable in production
at `/api/check-duplicates` and `/api/health` on the site's own domain.

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
cd api
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt uvicorn
uvicorn index:app --reload --port 8000
```

Then set the Backend API URL on `/tool` to `http://localhost:8000`.

## Run the checker without any server

`_dedupe.py` has no dependencies outside the standard library, so it
runs on its own:

```
python3 api/_dedupe.py path/to/found-persons.csv
python3 api/_dedupe.py path/to/found-persons.csv --json report.json
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
