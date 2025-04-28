from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from src.iscoding import iscoding

app = FastAPI()

@app.get("/api/iscoding")
def coding_stats():
    return iscoding()

app.mount("/", StaticFiles(directory="static", html=True), name="static")
