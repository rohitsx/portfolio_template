from lib.env import telegram_endpoint, telegram_chatid
import requests


def send_form(data):
    response = requests.get(
        telegram_endpoint, params={"chat_id": telegram_chatid, "text": f"{data}"}
    )

    if response.status_code != 200:
        return {
            "error": f"Failed to send_form: {response.status_code}",
            "details": response.text,
        }
    return {"message": "success"}
