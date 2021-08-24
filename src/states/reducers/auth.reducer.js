import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS} from "../../VARIABLE";

// const user = localStorage.getItem('token')
// const initialState2 = user ? {isLoggedIn: true, user} : {isLoggedIn: false, user: null}

const initialState = {
    isLoggedIn: false,
    user: null
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return state;
    }

}

export default authReducer;