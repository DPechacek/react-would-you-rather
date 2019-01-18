import { ADD_QUESTION, ADD_QUESTION_ANSWER, REMOVE_QUESTION_ANSWER, RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        /*
         * action properties:
         * - questions
         */
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        /*
         * action properties
         * - qid
         * - authedUser
         * - answer
         */
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