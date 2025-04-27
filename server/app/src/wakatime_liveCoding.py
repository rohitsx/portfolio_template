import requests
import base64
from datetime import datetime, timedelta
from lib.env import api_key


def is_currently_coding():
    auth_header = base64.b64encode(f"{api_key}:".encode()).decode()
    headers = {"Authorization": f"Basic {auth_header}"}

    # Calculate the timestamp for 5 minutes ago
    since_time = (datetime.utcnow() - timedelta(minutes=5)).isoformat() + "Z"

    # Fetch heartbeats since the calculated time
    response = requests.get(
        f"https://wakatime.com/api/v1/users/current/heartbeats?since={since_time}",
        headers=headers,
    )

    if response.status_code != 200:
        return "server-error"

    data = response.json().get("data", [])

    # If there are any heartbeats in the last 5 minutes, user is coding
    return len(data) > 0
