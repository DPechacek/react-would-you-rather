import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading';
import {addAnswerToQuestion, addQuestionToUser} from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';
export const REMOVE_QUESTION_ANSWER = 'REMOVE_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions: questions
    }
}

export function answerQuestion(qid, authedUser, answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        qid: qid,
        authedUser: authedUser,
        answer: answer
    }
}

export function unanswerQuestion(qid, authedUser, answer) {
    return {
        type: REMOVE_QUESTION_ANSWER,
        qid: qid,
        authedUser: authedUser,
        answer: answer
    }
}

export function handleAnswerQuestion(qid, answer) {
    return(dispatch, getState) => {
        const { authedUser} = getState();
        
        dispatch(showLoading());
        dispatch(answerQuestion(qid, authedUser, answer));
        dispatch(addAnswerToQuestion(qid, authedUser, answer));

        return saveQuestionAnswer(qid, authedUser, answer)
            .catch((e) => {
                console.warn('Error in saveQuestionAnswer', e);
                dispatch(unanswerQuestion(qid, authedUser, answer));
                alert('There was an error answering the question. Try again.');
                return false;
            })
            .then(() => {
                return true;
            })
            .finally(() => dispatch(hideLoading()));
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question: question
    }
}

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