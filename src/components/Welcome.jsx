import { useContext } from "react"
import {QuizContext} from "../context/quiz"
import Quiz from '../img/quiz.svg'

import './Welcome.css'


const Welcome = () => {
  const quizState = useContext(QuizContext)

  


  return (
    <div>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaxio para começar:</p>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome