import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import post from '../../reducers/post'
import { useDispatch, useSelector } from 'react-redux'
import { likePost } from '../../actions/post'

const PostItem = ({ post: { _id, name, text, avatar, user, likes, comments, date } }) => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const handleLike = (e, id) => {
        e.preventDefault();
        dispatch(likePost(id))
    }
    return (
        <>
            <div class="post bg-white p-1 my-1">
                <a href="#">
                    <img
                        class="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{name}</h4>
                </a>
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
                        onClick={(e) => handleLike(e, _id)}
                    >
                        <i class="fas fa-thumbs-up"></i>
                        <span> {likes.length}</span>
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
