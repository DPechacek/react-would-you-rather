import { getUsers, getQuestions } from "../utils/api";
import { receiveUsers } from './users';
import { showLoading, hideLoading } from 'react-redux-loading';
import {setAuthedUser} from "./authedUser";
import {receiveQuestions} from "./questions";

/**
 * Gets all the data we need.
 *
 * @returns {function(*): Promise<[any, any, any, any, any, any, any, any, any, any] | never>}
 */
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(setAuthedUser(null));
  
        return Promise.all([
          getUsers(),
          getQuestions()
        ]).then(([ users, questions ]) => {
          dispatch(receiveUsers(users));
          dispatch(receiveQuestions(questions));
          dispatch(hideLoading());
        });
    }
}