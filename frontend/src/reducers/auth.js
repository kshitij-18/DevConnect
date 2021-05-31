import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
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
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuth: true,
                loading: false
            }
        case REGISTER_FAIL:
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