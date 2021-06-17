import axios from 'axios'
import { setAlert } from './alert'
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
} from './constants'

// Gets all the posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get("/api/posts");

        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

// Add or remove like
export const likePost = (postId) => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like_post/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data.likes }
        })
    } catch (error) {
        console.log(error.toString())
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}