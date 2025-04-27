from dotenv import load_dotenv
import os

load_dotenv()  # Load .env file


api_key = os.getenv("WAKATIME_API_KEY")
