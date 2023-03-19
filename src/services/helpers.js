export const shuffleAnswers = (question) => {
    const unShuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers
    ]

    return unShuffledAnswers
        .map((unShuffledAnswer) => ({
        sort: Math.random(),
        value: unShuffledAnswer
        }))
        .sort((a, b) => a.sort - b.sort)
        .map((elem) => elem.value)
}

export const normalizeQuestions = (questions) => {
    return questions.map((question) => {
        const incorrectAnswers = question.incorrect_answers.map(
            (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
        )

        return {
            correctAnswer: decodeURIComponent(question.correct_answer),
            question: decodeURIComponent(question.question),
            incorrectAnswers,
        }
    })
}