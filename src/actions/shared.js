import { getUsers, getQuestions } from "../utils/api";
import { receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading';
import {setAuthedUser} from "./authedUser";
import {receiveQuestions} from "./questions";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(setAuthedUser(null));
        return getUsers()
            .then(({ users }) => {
                dispatch(receiveUsers(users));
                dispatch(hideLoading());
            });
    }
}

export function getInitialQuestions() {
    return (dispatch) => {
        dispatch(showLoading());
        return getQuestions()
            .then(({ questions }) => {
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            });
    }
}