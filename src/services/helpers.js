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