import { combineReducers} from 'redux';
import users from './users';
import authedUser from './authedUser';
import { loadingBarReducer } from 'react-redux-loading';
import questions from './questions';

/**
 * Combines all reducers
 */
export default combineReducers({
    authedUser: authedUser,
    users: users,
    questions: questions,
    loadingBar: loadingBarReducer
});