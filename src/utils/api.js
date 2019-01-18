import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_Data";

export function getUsers() {
    return Promise.all([
        _getUsers()
    ]).then(([users]) => ({
        users
    }))
}

export function getQuestions() {
    return Promise.all([
        _getQuestions()
    ]).then(([questions]) => ({
        questions
    }))
}

export function saveQuestion(question) {
    return _saveQuestion(question);
}

export function saveQuestionAnswer(authedUser, questionId, answer) {
    return _saveQuestionAnswer({
        authedUser: authedUser,
        qid: questionId,
        answer: answer
    })
}