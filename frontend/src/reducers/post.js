import {
    ADD_POST,
    DELETE_POST,
    GET_POST,
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES
} from '../actions/constants'
const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: payload
            }
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts.posts],
                loading: false
            }
        case UPDATE_LIKES:
            return {
                ...state,
                posts: state.posts.posts.map(post => post._id === payload.id ? { ...post, likes: payload.likes } : post),
                loading: false
            }
        case DELETE_POST:
            const { postId } = payload
            return {
                ...state,
                posts: state.posts.posts.filter(post => post._id !== postId),
                loading: false
            }
        default:
            return state
    }
}