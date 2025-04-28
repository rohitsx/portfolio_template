from dotenv import load_dotenv
import base64
import os

load_dotenv()  # Load .env file


api_key = os.getenv("WAKATIME_API_KEY")

auth_header = base64.b64encode(f"{api_key}:".encode()).decode()
headers = {"Authorization": f"Basic {auth_header}"}
