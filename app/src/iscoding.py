from datetime import datetime, timezone, timedelta
import requests
from lib.env import headers

def iscoding():
    today = datetime.now(timezone.utc).date().isoformat()
    
    response = requests.get(
        "https://wakatime.com/api/v1/users/current/heartbeats",
        headers=headers,
        params={"date": today}
    )
    
    if response.status_code != 200:
        return {"error": f"Failed to fetch data: {response.status_code}"}
    
    data = response.json()["data"]
    if not data:
        return {"status": False}
    
    latest_heartbeat = data[-1]
    
    current_utc = datetime.now(timezone.utc).replace(second=0, microsecond=0)
    api_time = datetime.fromisoformat(
        latest_heartbeat["created_at"].replace("Z", "+00:00")
    ).replace(second=0, microsecond=0)
    
    if (current_utc - api_time) < timedelta(minutes=3):
        return {
            "status": True,
            "language": latest_heartbeat["language"],
            "project": latest_heartbeat["project"],
        }
    else:
        return {"status": False}
