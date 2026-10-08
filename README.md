# 🎮 Tic Tac Toe — Full Stack Game

## 🎮 Live Demo

[Play Tic Tac Toe](https://tic-tac-toe-six-lyart-4nrvc04fxz.vercel.app/)

A full-stack Tic Tac Toe game built using **React.js** for the frontend and **Python FastAPI** for the backend.

The project demonstrates how a React frontend communicates with a Python backend through REST APIs.

## ✨ Features

- 🎮 Two-player Tic Tac Toe game
- ❌ Player X and ⭕ Player O turns
- 🏆 Automatic winner detection
- 🤝 Tie detection
- 🟩 Highlights the winning combination
- 🔄 Restart / Play Again functionality
- 🔗 React frontend connected to Python backend using Axios
- ⚡ FastAPI REST API for game operations
- 📱 Responsive user interface

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- JavaScript

### Backend
- Python
- FastAPI
- Uvicorn
- CORS

## 📁 Project Structure

```text
Tic Tac Toe/
│
├── BackEnd/
│   ├── main.py
│   ├── Game_logic.py
│   └── .gitignore
│
├── FrontEnd/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

## 🔗 How It Works

The project follows this flow:

```text
React Frontend
      ↓
    Axios
      ↓
FastAPI Backend
      ↓
Game Logic
      ↓
Backend Response
      ↓
React UI
```

The frontend sends the player's move to the FastAPI backend. The backend processes the move using the game logic and sends the updated board, current player, and game result back to the frontend.

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/HNSaba/tic-tac-toe-full-stack.git
```

```bash
cd tic-tac-toe-full-stack
```

### 2. Run the Backend

Open a terminal and move into the backend folder:

```bash
cd BackEnd
```

Install the required Python packages:

```bash
pip install fastapi uvicorn
```

Start the backend:

```bash
uvicorn main:app --reload --port 8000
```

The backend will run at:

```text
http://127.0.0.1:8000
```

### 3. Run the Frontend

Open another terminal and move into the frontend folder:

```bash
cd FrontEnd
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the `FrontEnd` folder:

```env
VITE_API_URL=http://127.0.0.1:8000
```

Start the frontend:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Checks whether the API is running |
| POST | `/move/{index}` | Sends a player's move |
| POST | `/reset` | Resets the game |

## 🎯 Learning Goals

This project helped me understand:

- Building a frontend using React.js
- Creating APIs using FastAPI
- Connecting React with a Python backend
- Sending and receiving data using Axios
- Separating frontend and backend logic
- Working with REST API endpoints
- Using Git and GitHub for version control

## 👩‍💻 Author

**H N Saba**

BCA Graduate | Aspiring Software Developer

GitHub: [HNSaba](https://github.com/HNSaba)