import {LOGOUT_AUTHED_USER, SET_AUTHED_USER} from "../actions/authedUser";

/**
 * Changes the logged in user state
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id;
        case LOGOUT_AUTHED_USER:
            return null;
        default:
            return state;
    }
}