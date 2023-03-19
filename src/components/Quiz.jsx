import Question from "./Question";
import {useContext} from "react";
import {QuizContext} from "../context/quiz";

const Quiz = () => {
    const [initialState, dispatch] = useContext(QuizContext)
    console.log('questions', initialState.questions)

    return(
        <div className='quiz'>
            <div>
                <div className='score'>Question 1/8</div>

                <Question questions={initialState.questions} />

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