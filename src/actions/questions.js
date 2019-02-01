import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading';
import {addAnswerToQuestion, addQuestionToUser, removeAnswerForQuestion} from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const REMOVE_QUESTION_ANSWER = 'REMOVE_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

/**
 * Initializes the state for questions
 *
 * @param questions
 * @returns {{questions: *, type: string}}
 */
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions: questions
    }
}

/**
 * Action for answering a question
 *
 * @param qid
 * @param authedUser
 * @param answer
 * @returns {{answer: *, type: string, authedUser: *, qid: *}}
 */
export function answerQuestion(qid, authedUser, answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        qid: qid,
        authedUser: authedUser,
        answer: answer
    }
}

/**
 * Action for removing answer from a question
 *
 * @param qid
 * @param authedUser
 * @param answer
 * @returns {{answer: *, type: string, authedUser: *, qid: *}}
 */
export function unanswerQuestion(qid, authedUser, answer) {
    return {
        type: REMOVE_QUESTION_ANSWER,
        qid: qid,
        authedUser: authedUser,
        answer: answer
    }
}

/**
 * Handles a user answering a question
 *
 * @param qid
 * @param answer
 * @returns {function(*, *): Promise<any>}
 */
export function handleAnswerQuestion(qid, answer) {
    return(dispatch, getState) => {
        const { authedUser} = getState();
        
        dispatch(showLoading());
        dispatch(answerQuestion(qid, authedUser, answer));
        dispatch(addAnswerToQuestion(qid, authedUser, answer));

        return saveQuestionAnswer(authedUser, qid, answer)
            .catch((e) => {
                console.warn('Error in saveQuestionAnswer', e);
                dispatch(unanswerQuestion(qid, authedUser, answer));
                dispatch(removeAnswerForQuestion(qid, authedUser))
                alert('There was an error answering the question. Try again.');
                return false;
            })
            .then(() => {
                return true;
            })
            .finally(() => dispatch(hideLoading()));
    }
}

/**
 * Action for adding a question
 *
 * @param question
 * @returns {{question: *, type: string}}
 */
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question: question
    }
}

/**
 * Method handling a user adding a question.
 *
 * @param optionOneText
 * @param optionTwoText
 * @returns {function(*, *): (Promise<any> | Promise<T>)}
 */
export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser} = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText: optionOneText,
            optionTwoText: optionTwoText,
            author: authedUser
        })
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addQuestionToUser(authedUser, question.id));
        })
        .finally(() => dispatch(hideLoading()))
    }
}