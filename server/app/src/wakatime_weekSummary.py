import requests
import base64
from lib.env import api_key


def get_wakatime_summary():
    auth_header = base64.b64encode(f"{api_key}:".encode()).decode()

    headers = {"Authorization": f"Basic {auth_header}"}

    response = requests.get(
        "https://wakatime.com/api/v1/users/current/summaries?range=last_7_days",
        headers=headers,
    )

    if response.status_code != 200:
        return {"error": f"Failed to fetch data: {response.status_code}"}

    data = response.json()
    print(data)

    cumulative_total = data.get("cumulative_total", {})
    total_coding_time = cumulative_total.get("text", "0h 0m")
    daily_average = cumulative_total.get("daily_average", "0h 0m")

    # Analyze projects, editors, and languages
    project_times = {}
    editor_times = {}
    language_times = {}

    for day in data.get("data", []):
        for project in day.get("projects", []):
            project_times[project["name"]] = (
                project_times.get(project["name"], 0) + project["total_seconds"]
            )
        for editor in day.get("editors", []):
            editor_times[editor["name"]] = (
                editor_times.get(editor["name"], 0) + editor["total_seconds"]
            )
        for language in day.get("languages", []):
            language_times[language["name"]] = (
                language_times.get(language["name"], 0) + language["total_seconds"]
            )

    # Find top project and editor
    main_project = (
        max(project_times, key=lambda k: project_times[k]) if project_times else None
    )
    main_editor = (
        max(editor_times, key=lambda k: editor_times[k]) if editor_times else None
    )

    # Prepare language breakdown
    language_breakdown = sorted(
        [
            {"language": lang, "time_seconds": secs}
            for lang, secs in language_times.items()
        ],
        key=lambda x: x["time_seconds"],
        reverse=True,
    )

    for lang in language_breakdown:
        hours = int(lang["time_seconds"] // 3600)
        minutes = int((lang["time_seconds"] % 3600) // 60)
        lang["time_text"] = f"{hours}h {minutes}m"

    return {
        "total_coding_time": total_coding_time,
        "daily_average": daily_average,
        "main_project": main_project,
        "main_editor": main_editor,
        "language_breakdown": language_breakdown,
    }


