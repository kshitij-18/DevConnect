import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import post from '../../reducers/post'
import { useDispatch, useSelector } from 'react-redux'
import { likePost, deletePost } from '../../actions/post'
import axios from 'axios'

const PostItem = ({ post: { _id, name, text, avatar, user, likes, comments, date } }) => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    // const handleLike = useCallback((id) => {
    //     dispatch(likePost(id))
    // }, [dispatch])
    const [likeState, setLikeState] = useState(likes)


    const handleLike = async (id) => {
        try {
            const res = await axios.put(`api/posts/like_post/${id}`)
            setLikeState(res.data.post.likes)
        } catch (error) {
            console.log(error.response.statusText)
        }
    }


    // const handleDeletePost =
    //     useCallback((id) => {
    //         dispatch(deletePost(id))
    //     }, [dispatch])

    const handleDeletePost = async (id) => {
        try {
            const res = await axios.delete(`api/posts/${id}`)
        } catch (error) {
            console.log(error.toString())
        }
    }

    return (
        <>
            <div class="post bg-white p-1 my-1">
                <Link to={`profile/${user}`}>
                    <img
                        class="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{name}</h4>
                </Link>
                <div>
                    <p>
                        <strong>{text}</strong>
                    </p>
                    <p className="post-date">
                        <Moment fromNow>{date}</Moment>
                    </p>
                    <button type="button"
                        class="btn btn-light"
                        style={{ maxWidth: "10%" }}
                        onClick={(e) => handleLike(_id)}
                    >
                        <i class="fas fa-thumbs-up"></i>
                        <span> {likeState.length}</span>
                    </button>
                    <Link to={`/post/${_id}`} href="post.html" class="btn btn-primary">
                        Comments
                        {' '}
                        {
                            comments.length > 0 && <span class='comment-count'> {comments.length}</span>
                        }

                    </Link>
                    {
                        !authState.loading && authState.user._id === user &&
                        <button
                            type="button"
                            class="btn btn-danger"
                            style={{ maxWidth: "10%" }}
                            onClick={(e) => handleDeletePost(_id)}
                        >
                            <i class="fas fa-times"></i>
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default PostItem
