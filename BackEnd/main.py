from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import Game_logic

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://tic-tac-toe-six-lyart-4nrvc04fxz.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def home():
    return {"message": "Tic Tac Toe API is Working"}

@app.post("/move/{index}")
def make_move(index: int):
    move_player=Game_logic.player
    winner =Game_logic.make_move(index)
    return{
        "board":Game_logic.board,
        "move_player":move_player,
        "player":Game_logic.player,
        "winner":winner
    }
@app.post("/reset")
def reset_game():
    Game_logic.board = [" " for _ in range(9)]
    Game_logic.player = "X"

    return{
        "board":Game_logic.board,
        "player":Game_logic.player
    }