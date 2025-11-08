# ☀️ Sunshine Laundrymat

**An open-source laundromat web app for small businesses and developers**

Sunshine Laundrymat is a full-stack web application built with **React**, **FastAPI**, and **SQLite**.
It’s designed as both a **ready-to-deploy laundromat management solution** and a **developer-friendly boilerplate** that can be adapted for other service-based businesses.

---

## 🌍 Vision

To empower small businesses and developers by providing a reusable, modern web app template that helps them quickly launch their services online — without needing to build everything from scratch.

## 💡 Mission

Build an open, customizable platform that balances simplicity and scalability — making it easy for anyone to deploy, customize, and extend for their own use cases.

---

## ⚙️ Tech Stack

| Layer      | Technology              |
| :--------- | :---------------------- |
| Frontend   | React                   |
| Backend    | FastAPI                 |
| Database   | SQLite (default)        |
| Deployment | Docker & Docker Compose |

---

## 🧱 Features (WIP)

* 🧺 Service listings (Wash & Fold, Ironing, Pickup & Delivery)
* 👤 User dashboard with credits
* 📅 Booking and scheduling
* 💬 Notifications and order tracking
* ⚡ FastAPI backend with RESTful endpoints
* 🪶 Lightweight SQLite database for portability
* 🐳 One-command Docker deployment

---

## 🚀 Quick Start

### Prerequisites

* Docker
* Docker Compose

### Steps

```bash
# Clone the repo
git clone https://github.com/<your-username>/sunshinelaundrymat.git
cd sunshinelaundrymat

# Run the app
docker compose up
```

Access the app at: **[http://localhost:3000](http://localhost:3000)**

---

## 🧩 Architecture Overview

```
Frontend (React)
     ↓ REST API
Backend (FastAPI)
     ↓
Database (SQLite)
```

* **React frontend** handles the user interface and booking logic.
* **FastAPI backend** manages service data, user sessions, and communication between frontend and database.
* **SQLite** serves as a lightweight local database (can later be replaced with PostgreSQL or MySQL).

---
## 🛠️ CI/CD

Sunshine Laundrymat includes a **Continuous Integration (CI) workflow** to ensure backend code quality and functionality.

### Backend Tests

The CI pipeline automatically runs **pytest** tests for core backend functionality:

- `test_create_delivery` – Verify that deliveries can be created successfully  
- `test_get_deliveries` – Ensure retrieval of deliveries works correctly  
- `test_create_pickup` – Verify that pickups can be created successfully  
- `test_get_pickups` – Ensure retrieval of pickups works correctly  

### GitHub Actions Workflow

On each push or pull request, the CI workflow:

1. Sets up a **Python** environment  
2. Installs dependencies from `requirements.txt`  
3. Runs all **pytest** tests  
4. Reports pass/fail status directly in the GitHub pull request  

This ensures that any changes to the backend code do not break existing functionality, helping maintain a stable, production-ready application.


---
## 🧑‍💻 For Developers

Sunshine Laundrymat can be used as a **starter boilerplate** for other small service businesses — like carwash, tailoring, cleaning, or delivery services.

Feel free to:

* Fork this repository
* Customize the UI and routes
* Swap out SQLite for a cloud database
* Extend APIs for your business logic

---

## 👐 Contributing

Pull requests are welcome!
If you’d like to suggest a feature or fix a bug, please open an issue first to discuss what you’d like to change.

---

## License

This project is licensed under the **MIT License** — you’re free to use, modify, and distribute it.

---

## 🌞 Credits

Created with ❤️ by Robby — because small businesses deserve simple digital tools.
