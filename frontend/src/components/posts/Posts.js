import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/post'
import Spinner from '../Spinner'
import PostItem from './PostItem'

const Posts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
        console.log()
    }, [])

    const postState = useSelector(state => state.post)
    console.log(postState.posts !== {} && postState.loading === false && postState.posts.posts)

    const { posts } = postState.posts
    const { loading } = postState.loading
    return (
        <div>
            {
                loading ? <Spinner /> :
                    <>
                        <h1 class="large text-primary">
                            Posts
                        </h1>
                        <p class="lead"><i class="fas fa-user"></i> Welcome to the community!</p>
                        {/* Add Post Component goes here */}
                        <div className="posts">
                            {
                                posts && posts.map(post => (
                                    <PostItem key={post._id} post={post} />
                                ))
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default Posts
