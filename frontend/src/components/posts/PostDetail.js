import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Moment from 'react-moment'

const PostDetail = ({ match }) => {
    // const dispatch = useDispatch()

    const [post, setPost] = useState({})
    const [comment, setComment] = useState('')

    // const authState = useSelector(state => state.auth)

    useEffect(() => {
        async function getPost() {
            try {
                const { data } = await axios.get(`/api/posts/${match.params.id}`)
                console.log(data)
                setPost(data.post)
            } catch (error) {
                console.log(error.response.statusText)
            }
        }

        getPost()
    }, [post])

    const addComment = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const { data } = await axios.put(`/api/posts/addComment/${match.params.id}`, { text: comment }, config)
        } catch (error) {
            console.log(error.response.statusText)
        }
        setComment('')
    }

    return (
        <>
            <Link to="/posts" class="btn">Back To Posts</Link>
            <div class="post bg-white p-1 my-1">

                {
                    console.log(post)
                }
                <div>
                    <a href="profile.html">
                        <img
                            class="round-img"
                            src={post.avatar}
                            alt=""
                        />
                        <h4>{post.name}</h4>
                    </a>
                </div>
                <div>
                    <p class="my-1">
                        {post.text}
                    </p>
                </div>
            </div>

            <div className="post-form" onSubmit={addComment}>
                <div className="bg-primary p">
                    <h3>Leave A Comment</h3>
                </div>
                <form className="form my-1">
                    <textarea
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder="Comment on this post"
                        value={comment}
                        required
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <input type="submit" className="btn btn-dark my-1" value="Submit" />
                </form>
            </div>

            <div className="comments">
                {
                    console.log(post)
                }
                {
                    post.comments && post.comments.map(comment => (
                        <>
                            <div class="post bg-white p-1 my-1" key={comment._id}>
                                <div>
                                    <a href="profile.html">
                                        <img
                                            class="round-img"
                                            src={comment.avatar}
                                            alt=""
                                        />
                                        <h4>{comment.name}</h4>
                                    </a>
                                </div>
                                <div>
                                    <p className="my-1">
                                        {comment.text}
                                    </p>
                                    <p class="post-date">
                                        <Moment fromNow>{comment.date}</Moment>
                                    </p>
                                    {/* {
                                        !authState.loading && authState.user._id === comment._id &&
                                        <button
                                            type="button"
                                            class="btn btn-danger"
                                        >
                                            <i class="fas fa-times"></i>
                                        </button>
                                    } */}
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>


        </>
    )
}

export default withRouter(PostDetail)
