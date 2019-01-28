export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users: users
    }
}

export function addQuestionToUser(uid, qid) {
    return {
        type: ADD_QUESTION_TO_USER,
        uid: uid,
        qid: qid
    }
}

export function addAnswerToQuestion(qid, uid, answer) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        uid: uid,
        qid: qid,
        answer: answer
    }
}