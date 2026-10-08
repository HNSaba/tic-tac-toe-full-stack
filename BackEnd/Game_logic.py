player = "X"
board = [" " for _ in range(9)]


def check_winner():
    winning_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for combo in winning_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] != " ":
            return {
                "player": board[combo[0]],
                "combination":combo
            }

    if " " not in board:
        return "Tie"

    return None

def make_move(index):
    global player
    if board[index]==" ":
        board[index]=player
        winner = check_winner()
        if not winner:
            player = "O" if player == "X" else "X"
        return winner
    return None