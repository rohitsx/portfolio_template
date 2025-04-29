from os import name
import requests
from lib.env import headers


def week_stats():
    response = requests.get(
        "https://wakatime.com/api/v1/users/current/stats/last_7_days",
        headers=headers,
    )

    if response.status_code != 200:
        return {"error": f"Failed to fetch data: {response.status_code}"}

    data = response.json()
    data = data.get("data")

    if not data:
        return {"error": "No data found"}

    languages = data["languages"]
    res_lang = []
    for lang in languages:
        total_minutes = lang.get("hours", 0) * 60 + lang.get("minutes", 0)
        total_hours = round(total_minutes / 60, 2)
        res_lang.append(
            {
                "name": lang["name"],
                "hours": total_hours,
                "percent": lang["percent"],
            }
        )

    print((data.get("projects")[0]).get("name"))
    return {
        "daily_average": data.get("human_readable_daily_average"),
        "time_coding": data.get("human_readable_total"),
        "main_project": (data.get("projects")[0]).get("name"),
        "main_editor": (data.get("editors")[0]).get("name"),
        "languages": res_lang,
    }
