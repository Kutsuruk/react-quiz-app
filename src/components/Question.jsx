import Answer from "./Answer";
import {useContext} from "react";
import {QuizContext} from "../context/quiz";

const Question = () => {
    const [quizState] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex].question

    console.log(quizState)
    return(
        <div>
            <div className='question'>
                {currentQuestion}
            </div>
            <div className='answers'>
                {
                    quizState.answers.map((answer, index) => (
                        <Answer key={index} answer={answer} />
                    ))
                }
            </div>
        </div>
    )
}

export default Question