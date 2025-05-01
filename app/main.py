from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from src.iscoding import iscoding
from src.get_week_stats import week_stats
from src.send_form_data import send_form
from pydantic import BaseModel

app = FastAPI()


@app.get("/api/iscoding")
def coding_stats():
    return iscoding()


@app.get("/api/weekstats")
def get_week_stats():
    return week_stats()


class FormData(BaseModel):
    name: str
    email: str
    whatsapp: str
    message: str


@app.post("/api/send-form-data")
def send_form_data(data: FormData):
    return send_form(data)


app.mount("/", StaticFiles(directory="static", html=True), name="static")
app.mount("/contact", StaticFiles(directory="static", html=True), name="static")
