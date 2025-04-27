from fastapi import FastAPI
from src.wakatime_weekSummary import get_wakatime_summary
from src.wakatime_liveCoding import is_currently_coding

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Fuck Off (random rage)"}


@app.get("/wakatime")
def wakatime():
    return get_wakatime_summary()

@app.get("/livecoding")
def liveCoding():
    return is_currently_coding()
