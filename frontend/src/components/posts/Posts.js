import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/post'
import Spinner from '../Spinner'
import PostItem from './PostItem'
import PostForm from './PostForm'

const Posts = () => {
    const dispatch = useDispatch()


    const postState = useSelector(state => state.post, shallowEqual)
    useEffect(() => {
        dispatch(getPosts())
        console.log()
    }, [dispatch, postState])


    console.log(postState.posts !== {} && postState.loading === false && postState.posts.posts)
    console.log("Displaying state.posts")
    console.log(postState.posts)
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
                        <PostForm />
                        <div className="posts">
                            {
                                console.log(posts)
                            }
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
