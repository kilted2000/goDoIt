# GoDo

A simple todo app built to practice Go backend development. The frontend is vanilla TypeScript with Vite, and tasks are persisted in localStorage.

## Tech Stack

- **Backend:** Go
- **Frontend:** TypeScript, Vite
- **Storage:** localStorage (browser)

## Project Structure

```
todo-app/
├── backend/
│   ├── main.go
│   ├── go.mod
│   └── go.sum
│
└── frontend/
    ├── src/
    │   ├── main.ts
    │   └── api.ts
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    └── vite.config.ts
```

## Getting Started

### Prerequisites

- [Go](https://go.dev/dl/) 1.21+
- [Node.js](https://nodejs.org/) 18+

### Running the Backend

```bash
cd backend
go run main.go
```

The server will start on `http://localhost:8080`.

### Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173`.

## Features

- Add a new task
- View all tasks
- Edit a task
- Delete a task
- Tasks persisted in localStorage

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Purpose

This project exists to practice building a REST API in Go. The backend is intentionally simple — no database, no auth, no external dependencies beyond the standard library.
