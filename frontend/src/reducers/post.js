const initialState = {
    posts: [],
    post: null,
    loading: true
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        default:
            return state
    }
}