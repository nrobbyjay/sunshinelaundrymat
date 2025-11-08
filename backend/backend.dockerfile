FROM python:3.10.19-slim-trixie
WORKDIR /app
COPY ./backend/requirements.txt .
RUN ["pip", "install", "-r", "requirements.txt"]