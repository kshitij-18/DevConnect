import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../actions/post'

const PostForm = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const handlePostFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ text }))
        setText('')
    }
    return (
        <>
            <div class="post-form">
                <div class="bg-primary p">
                    <h3>Say Something...</h3>
                </div>
                <form class="form my-1" onSubmit={handlePostFormSubmit}>
                    <textarea
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder="Create a post"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        required
                    ></textarea>
                    <input type="submit" class="btn btn-dark my-1" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default PostForm
