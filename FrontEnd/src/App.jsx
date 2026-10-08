import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [board, setBoard] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ])

  const [player, setPlayer] = useState("X")
  const [gameOver, setGameOver] = useState(false)
  const [gameReady, setGameReady] = useState(false)
  const [winningLine, setWinningLine] = useState([])
  const [result, setResult] = useState("")

  // Reset backend when the page loads
  useEffect(() => {
    const resetBackend = async () => {
      try {
        await axios.post(`${API_URL}/reset`)
        setGameReady(true)
      } catch (error) {
        console.error("Could not reset the game:", error)
      }
    }

    resetBackend()
  }, [])

  const handleClick = async (index) => {
    if (board[index] !== "" || gameOver || !gameReady) {
      return
    }

    try {
      const response = await axios.post(
       `${API_URL}/move/${index}`
      )

      console.log(response.data)

      const data = response.data

      // Update board using backend response
      setBoard(
        data.board.map(cell => cell === " " ? "" : cell)
      )

      // Update player using backend response
      setPlayer(data.player)

      // Check backend result
      if (data.winner) {
        if (data.winner === "Tie") {
          setResult("It's a Tie!")
        } else {
          setResult(`Player ${data.winner.player} wins!`)
          setWinningLine(data.winner.combination)
        }

        setGameOver(true)
        return
      }

    } catch (error) {
      console.error("Error making move:", error)
    }
  }

  const resetGame = async () => {
    setGameReady(false)

    try {
      const response = await axios.post(
        `${API_URL}/reset`
      )

      console.log(response.data)

      setBoard([
        "", "", "",
        "", "", "",
        "", "", ""
      ])

      setPlayer("X")
      setGameOver(false)
      setWinningLine([])
      setResult("")

      setGameReady(true)

    } catch (error) {
      console.error("Could not reset the game:", error)
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white'>

      <div className='bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col items-center'>

        <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>
          Tic Tac Toe
        </h1>

        <h2 className='text-xl font-semibold mb-6'>
          {gameOver ? (
            "Game Over"
          ) : (
            <>
              Player{" "}
              <span
                className={
                  player === "X"
                    ? "text-blue-400"
                    : "text-pink-400"
                }
              >
                {player}
              </span>
              's turn
            </>
          )}
        </h2>

        {result && (
          <p className='text-lg font-bold text-green-400 mb-4'>
            {result}
          </p>
        )}

        <div className='grid grid-cols-3 gap-2 mt-2'>

          {board.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`w-16 h-16 sm:w-20 sm:h-20 border-2 border-white rounded-lg flex items-center justify-center text-3xl sm:text-4xl font-bold hover:bg-gray-800 hover:scale-105 transition ${
                winningLine.includes(index)
                  ? "bg-green-600"
                  : "bg-transparent"
              } ${
                value === "X"
                  ? "text-blue-400"
                  : "text-pink-400"
              }`}
            >
              {value}
            </button>
          ))}

        </div>

        <button
          onClick={resetGame}
          className='mt-6 px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-300 transition'
        >
          {gameOver ? "Play Again" : "Restart Game"}
        </button>

      </div>

    </div>
  )
}

export default App