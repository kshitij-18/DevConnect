import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ACCOUNT_DELETED
} from '../actions/constants'

const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    loading: true,
    isAuth: null
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                user: payload,
                isAuth: true,
                loading: false
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuth: true,
                loading: false
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
        case ACCOUNT_DELETED:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
            }
        default:
            return state
    }
}