import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAlert } from './alert'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from './constants'
import setAuthToken from '../utils/setAuthToken'

// SetUser
export const loadUser = () => async dispatch => {
    let tokenFromStorage = localStorage.getItem('token')
    if (tokenFromStorage) {
        setAuthToken(tokenFromStorage)
    }

    try {
        const res = await axios.get('/api/auth')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const loginAction = ({ email, password }) => async dispatch => {
    const body = JSON.stringify({ email, password })

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        let res = await axios.post('/api/auth', body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")))
        }

        dispatch({
            type: LOGIN_FAIL
        })
    }
}

const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({ name, email, password })

    try {
        let res = await axios.post('/api/users', body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")))
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

export default register