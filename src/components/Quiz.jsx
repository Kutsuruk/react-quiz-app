import Question from "./Question";
import {useContext, useEffect} from "react";
import { QuizContext } from "../context/quiz";

const Quiz = () => {
    const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986'
    const [quizState, dispatch] = useContext(QuizContext)
    const questionsLength = quizState.questions.length
    const currentQuestionIndex = quizState.currentQuestionIndex + 1
    const correctAnswerCount = quizState.correctAnswersCount

    useEffect(() => {
        if (quizState.questions.length > 0) {
            return
        }
        console.log('on initialize')

        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'LOADED_QUESTIONS', payload: data.results })
            })
    })

    return(
        <div className='quiz'>
            {quizState.showResults && (
                <div className='results'>
                    <div className='congratulations'>Congratulations</div>
                    <div className='results-info'>
                        <div>You have completed the quiz.</div>
                        <div>
                            You've got {correctAnswerCount} of {questionsLength}
                        </div>
                    </div>
                    <div
                        className='next-button'
                        onClick={() => dispatch({ type: 'RESTART' })}
                    >
                        Restart
                    </div>
                </div>
            )}
            {!quizState.showResults && quizState.questions.length > 0 && (
                <div>
                    <div className='score'>
                        Question {currentQuestionIndex}/{questionsLength}
                    </div>

                    <Question />

                    <div
                        className='next-button'
                        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
                    >
                        Next question
                    </div>
                </div>
            )}
        </div>
    )
}

export default Quiz