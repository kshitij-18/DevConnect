import axios from 'axios'
import { setAlert } from './alert';
import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    ACCOUNT_DELETED
} from './constants';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/profile/me')
        dispatch({
            type: GET_PROFILE,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Create or update the profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const res = await axios.post('/api/profile/me', formData, config)

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

        dispatch(setAlert(edit ? "Profile updated successfully" : "Profile Created successfully", "success"));

        history.push("/dashboard")
    } catch (error) {

        const errors = error.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Add Experience
export const addExperience = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const res = await axios.put('/api/profile/experience/update', formData, config)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert("Experience added successfully", "success"));

        history.push("/dashboard")
    } catch (error) {

        const errors = error.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Add Education
export const addEducation = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const res = await axios.put('/api/profile/education', formData, config)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert("Education added successfully", "success"));

        history.push("/dashboard")
    } catch (error) {

        const errors = error.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Delete an experience
export const deleteExperience = id => async dispatch => {
    try {

        const res = await axios.delete(`/api/profile/experience/${id}`)

        dispatch(
            {
                type: UPDATE_PROFILE,
                payload: res.data
            }
        )

        dispatch(setAlert("Experience Removed Successfully", "success"))
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Delete Education
export const deleteEducation = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/education/${id}`)

        dispatch(
            {
                type: UPDATE_PROFILE,
                payload: res.data
            }
        )

        dispatch(setAlert("Education Removed Successfully", "success"))

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Delete Account
export const deleteAccount = () => async dispatch => {
    if (window.confirm('Are You sure you want to delete your account this action cannot be undone')) {
        try {
            const res = await axios.delete(`/api/profile/delete`)

            dispatch(
                {
                    type: CLEAR_PROFILE,
                    type: ACCOUNT_DELETED
                }
            )

            dispatch(setAlert("Profile Removed Successfully", "success"))

        } catch (error) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: error.response.statusText, status: error.response.status }
            })
        }
    }
}