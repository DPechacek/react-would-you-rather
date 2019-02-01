import { ADD_QUESTION, ADD_QUESTION_ANSWER, REMOVE_QUESTION_ANSWER, RECEIVE_QUESTIONS } from "../actions/questions";

/**
 * Handles changes to the questions state
 * @param state
 * @param action
 * @returns {*}
 */
export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION_ANSWER:
            return {
                ...state,
                [action.qid] : {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            };
        case REMOVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.qid] : {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.filter((vote) => vote !== action.authedUser)
                    }
                }
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        default:
            return state;
    }
}