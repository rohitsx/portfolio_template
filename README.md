# Portfolio Web App

A lightweight personal portfolio built with **FastAPI** (Python backend) and a **static frontend** (HTML/CSS/JS + Tailwind). Features:

- **WakaTime Integration** – Displays weekly coding stats
- **Telegram Contact Form** – Sends messages via a bot
- **Docker or Local** – Easy deployment with Docker or Python

## Getting Started

### Prerequisites

- **Docker** or **Python 3.7+**

### Environment Variables

Create `.env` with:

```ini
WAKATIME_API_KEY=<your_wakatime_api_key>
TELEGRAM_BOT_TOKEN=<your_telegram_bot_token>
TELEGRAM_CHAT_ID=<your_telegram_chat_id>
```

### Running with Docker

```bash
docker run -p 8000:8080 -v ${PWD}/app:/code/app --env-file .env rohiitq/portfolio
```

### Running Locally

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8080
```

## Project Structure

- `app/main.py`: FastAPI entry point
- `app/static/`: Static files (HTML/CSS/JS)
- `requirements.txt`: Python dependencies
- `Dockerfile`: Docker build instructions

## Access the App

- **Docker**: http://localhost:8000
- **Locally**: http://localhost:8080

## Fork and Star ⭐

Feel free to fork or reuse the project, and consider starring it on GitHub!
