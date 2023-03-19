import {createContext, useReducer} from "react";
import data from "../mockData/data";

const initialState = {
    questions: data,
    currentQuestionIndex: 0,
    showResults: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            const showResults = state.currentQuestionIndex === state.questions.length - 1
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1

            return {
                ...state,
                currentQuestionIndex,
                showResults,
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