from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from src.iscoding import iscoding
from src.get_week_stats import week_stats

app = FastAPI()


@app.get("/api/iscoding")
def coding_stats():
    return iscoding()


@app.get("/api/weekstats")
def get_week_stats():
    return week_stats()


app.mount("/", StaticFiles(directory="static", html=True), name="static")
app.mount("/contact", StaticFiles(directory="static", html=True), name="static")
