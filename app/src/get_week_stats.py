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

    total_hours_coding = int(data.get("total_seconds", 0) // 3600)
    daily_avg_hours = round(data.get("daily_average", 0) / 3600, 2)

    return {
        "daily_average": str(daily_avg_hours) + " hr",
        "time_coding": str(total_hours_coding) + " hr",
        "main_project": (data.get("projects")[0]).get("name"),
        "main_editor": (data.get("editors")[0]).get("name"),
        "languages": res_lang,
    }
