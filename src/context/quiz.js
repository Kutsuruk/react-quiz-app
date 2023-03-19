import {createContext, useReducer} from "react";
import questions from "../mockData/data";
import {shuffleAnswers} from "../services/helpers";

const initialState = {
    questions,
    currentQuestionIndex: 0,
    showResults: false,
    answers: shuffleAnswers(questions[0])
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            const showResults = state.currentQuestionIndex === state.questions.length - 1
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1
            const answers = showResults ? [] :  shuffleAnswers(state.questions[currentQuestionIndex])

            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
            }

        case 'RESTART':
            return initialState

        default: return initialState
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState)

    return(
        <QuizContext.Provider value={value}>
            { children }
        </QuizContext.Provider>
    )
}