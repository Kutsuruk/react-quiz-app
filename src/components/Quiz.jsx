import Question from "./Question";
import {useContext} from "react";
import {QuizContext} from "../context/quiz";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    console.log('questions', quizState.questions)
    const questionsLength = quizState.questions.length
    const currentQuestionIndex = quizState.currentQuestionIndex + 1

    return(
        <div className='quiz'>
            <div>
                <div className='score'>Question {currentQuestionIndex}/{questionsLength}</div>

                <Question />

                <div className='next-button'
                     onClick={() => dispatch({type: 'NEXT-QUESTION'})}
                >
                    Next question
                </div>
            </div>
        </div>
    )
}

export default Quiz