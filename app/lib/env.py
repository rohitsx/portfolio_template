from dotenv import load_dotenv
import base64
import os

load_dotenv()  # Load .env file


api_key = os.getenv("WAKATIME_API_KEY")
telegram_token = os.getenv("TELEGRAM_BOT_TOKEN")
telegram_chatid = os.getenv("TELEGRAM_CHAT_ID")

auth_header = base64.b64encode(f"{api_key}:".encode()).decode()
headers = {"Authorization": f"Basic {auth_header}"}


telegram_endpoint = f"https://api.telegram.org/bot{telegram_token}/sendMessage"
