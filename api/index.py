"""
FastAPI app deployed as a Vercel Function via the file-based /api
convention (this repo has no root-level Python entrypoint/requirements
file, so it never triggers Vercel's whole-project Python framework
preset — it just adds this one API alongside the static site).

Deploys automatically with the rest of the repo; no separate service or
vercel.json needed. Routes are declared with their full /api/... path
because Vercel forwards the actual request path to this app.

Local dev: `vercel dev` serves the static site and this API together
on one port, matching production. See ../api/README.md.
"""
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from _dedupe import analyze_csv

app = FastAPI(title="Found-persons duplicate checker")

# The /tool page calls this same-origin in production, but CORS stays
# open so it (or anyone testing locally) can also point at this API
# from a different origin — the endpoint only reads an uploaded file
# back to its own uploader, it doesn't expose or mutate shared state.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["POST"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health():
    return {"ok": True}


@app.post("/api/check-duplicates")
async def check_duplicates(file: UploadFile = File(...)):
    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(status_code=400, detail="Please upload a .csv file.")

    raw = await file.read()
    try:
        csv_text = raw.decode("utf-8-sig")
    except UnicodeDecodeError:
        raise HTTPException(status_code=400, detail="Couldn't read that file as UTF-8 text.")

    if not csv_text.strip():
        raise HTTPException(status_code=400, detail="The file is empty.")

    try:
        result = analyze_csv(csv_text)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Couldn't parse that CSV: {e}")

    return result
