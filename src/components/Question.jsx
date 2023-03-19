import Answer from "./Answer";
import {useContext} from "react";
import {QuizContext} from "../context/quiz";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex].question

    console.log(quizState)
    return(
        <div>
            <div className='question'>
                {currentQuestion}
            </div>
            <div className='answers'>
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>
        </div>
    )
}

export default Question