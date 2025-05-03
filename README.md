# Portfolio Web Application

A personal portfolio web app built with FastAPI (Python) and a static frontend (HTML/CSS/JavaScript with Tailwind CSS). It displays weekly coding activity stats from WakaTime and includes a contact form that sends messages via Telegram.

All application code resides in the `app/` directory, with `main.py` serving as the FastAPI entry point. The app is lightweight (no database) and can be run with Docker or directly with Python for development and deployment.

## Features

- **FastAPI Backend**: Python-based API and web server handling routes and the contact form
- **Static Frontend**: Modern UI styled with Tailwind CSS, using vanilla HTML and JavaScript
- **WakaTime Integration**: Fetches and displays weekly coding stats using the WakaTime API
- **Contact Form**: Sends messages to a Telegram chat using a bot
- **Containerized or Local**: Ready to run in Docker or natively via Uvicorn for flexible development

## Built With

- **FastAPI (Python)** – Web framework for the backend
- **Tailwind CSS** – Utility-first CSS framework for styling
- **WakaTime API** – Retrieves coding activity statistics
- **Telegram Bot API** – Used by the contact form to send messages
- **Docker** – For containerized deployment (image available on Docker Hub)

## Getting Started

### Prerequisites

- **Docker** (for the Docker method) – Install Docker Engine on your machine
- **Python 3.7+** (for the local method) – Install Python 3

### Environment Variables

Create a file named `.env` in the project root (same level as the `app/` folder) and add the following variables:

```
WAKATIME_API_KEY=<your_wakatime_api_key>
TELEGRAM_BOT_TOKEN=<your_telegram_bot_token>
TELEGRAM_CHAT_ID=<your_telegram_chat_id>
```

- **WAKATIME_API_KEY**: Your WakaTime API key (get it from your WakaTime account settings)
- **TELEGRAM_BOT_TOKEN**: Token for a Telegram bot (created via BotFather)
- **TELEGRAM_CHAT_ID**: The chat ID where your bot will send contact messages (your telegram user ID)

### Running with Docker

You can quickly run the app using Docker. An image is available at `rohiitq/portfolio`.

1. **Pull from Docker Hub** (optional if you have the image locally):

```bash
docker pull rohiitq/portfolio
```

2. **Run for development**: Mount the local `app/` code and pass the `.env` file:

```bash
docker run -p 8000:8080 \
  -v ${PWD}/app:/code/app \
  --env-file .env \
  rohiitq/portfolio     # or your loacl image
```

This maps host port 8000 to the container's port 8080. After running, open your browser to http://localhost:8000 to view the portfolio.

**Build the image locally** :

```bash
docker build -t portfolio .
```

Then run it (as above) using the `portfolio` tag.

### Running Locally (No Docker)

To run the app without Docker, set up a Python virtual environment and install dependencies:

```bash
python -m venv venv
source venv/bin/activate       # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
```

After installing, start the FastAPI server with Uvicorn:

```bash
uvicorn main:app --host 0.0.0.0 --port 8080
```

Once the server is running, open http://localhost:8080 in your browser to see the portfolio site.

## Environment Configuration

- Ensure your `.env` file (in the root directory) contains the required variables as shown above
- With Docker, the `--env-file .env` option reads these

## Project Structure

All application code is under the `app/` directory. Key files and folders include:

- `app/main.py` – FastAPI application entry point
- `app/static/` – Static HTML, CSS, JS files for the frontend
- `app/templates/` – (If used) HTML templates for rendering pages
- `requirements.txt` – Python dependencies
- `Dockerfile` – Instructions to build the Docker image

## Accessing the App

- **Docker**: Visit http://localhost:8000
- **Locally**: Visit http://localhost:8080

## Fork and Star ⭐

This portfolio project is open-source and you're free to fork or reuse the code in your own projects. If you find this project helpful or interesting, please consider giving it a star on GitHub!
