import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_Data";

export function getUsers() {
    return _getUsers();
}

export function getQuestions() {
    return _getQuestions();
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