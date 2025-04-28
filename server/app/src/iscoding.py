from datetime import date
import requests
from lib.env import headers


def iscoding():
    response = requests.get(
        "https://wakatime.com/api/v1/users/current/heartbeats",
        headers=headers,
        params={"date": date.today().isoformat()},
    )

    if response.status_code != 200:
        return {"error": f"Failed to fetch data: {response.status_code}"}

    data = response.json()
    for heartbeat in data.get("data", []):
        if heartbeat.get("category") == "coding":
            return {"status": "coding"}
    return {"status": "not coding"}
