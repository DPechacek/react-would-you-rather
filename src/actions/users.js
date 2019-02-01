export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
export const REMOVE_ANSWER_FOR_QUESTION = 'REMOVE_ANSWER_FOR_QUESTION';

/**
 * Action to initialize state for users
 *
 * @param users
 * @returns {{type: string, users: *}}
 */
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users: users
    }
}

/**
 * Action add a question to a user
 *
 * @param uid
 * @param qid
 * @returns {{uid: *, type: string, qid: *}}
 */
export function addQuestionToUser(uid, qid) {
    return {
        type: ADD_QUESTION_TO_USER,
        uid: uid,
        qid: qid
    }
}

/**
 * Action to add an answer to a question
 *
 * @param qid
 * @param uid
 * @param answer
 * @returns {{uid: *, answer: *, type: string, qid: *}}
 */
export function addAnswerToQuestion(qid, uid, answer) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        uid: uid,
        qid: qid,
        answer: answer
    }
}

/**
 * Action for removing an answer from a question.
 *
 * @param qid
 * @param uid
 * @returns {{uid: *, type: string, qid: *}}
 */
export function removeAnswerForQuestion(qid, uid) {
    return {
        type: REMOVE_ANSWER_FOR_QUESTION,
        uid: uid,
        qid: qid
    }
}