export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOGOUT_AUTHED_USER = 'LOGOUT_AUTHED_USER';

/**
 * Sets the currently logged in user
 * @param id
 * @returns {{id: *, type: string}}
 */
export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id: id
    }
}

/**
 * Logs out the logged in user.
 *
 * @param id
 * @returns {{id: *, type: string}}
 */
export function logoutAuthedUser(id) {
    return {
        type: LOGOUT_AUTHED_USER,
        id: id
    }
}