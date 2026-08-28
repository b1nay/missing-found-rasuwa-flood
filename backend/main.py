"""
FastAPI backend for the duplicate-checker tool at /tool.

Run locally:
    pip install -r requirements.txt
    uvicorn main:app --reload --port 8000

Then POST a CSV file to /api/check-duplicates (multipart/form-data,
field name "file"). See dedupe.py for the actual normalize/dedupe logic.
"""
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from dedupe import analyze_csv

app = FastAPI(title="Found-persons duplicate checker")

# The frontend is a static site that may be served from a different
# origin than this API (e.g. during local development), so allow any
# origin — this endpoint only reads an uploaded file back to its own
# uploader, it doesn't expose or mutate any shared state.
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
