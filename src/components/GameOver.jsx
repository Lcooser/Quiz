import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import WellDone from "../img/welldone.svg"

import "./GameOver.css"



const GameOver = () => {
  return (
    <div id="gameover">
        <h2>Game Over</h2>
        <p>Score: x</p>
        <p>You've aswered y of z questions.</p>
        <img src={WellDone} alt="End of quiz" />
        <button>Restart</button>
        
    </div>
  )
}

export default GameOver