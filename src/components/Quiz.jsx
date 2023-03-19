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
            {
                !quizState.showResults ? (
                    <div>
                        <div className='score'>Question {currentQuestionIndex}/{questionsLength}</div>

                        <Question />

                        <div className='next-button'
                             onClick={() => dispatch({type: 'NEXT_QUESTION'})}
                        >
                            Next question
                        </div>
                    </div>
                ) : (
                    <div className='results'>
                        <div className='congratulations'>Congratulation!</div>
                        <div className='results-info'>
                            <div>You Have Completed The Quiz</div>
                            <div>You'he Got 4 of 8</div>
                            <div className='next-button'
                                 onClick={() => dispatch({type: 'RESTART'})}
                            >
                                Restart Quiz
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Quiz