import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/post'
import Spinner from '../Spinner'
import PostItem from './PostItem'
import PostForm from './PostForm'
import axios from 'axios'

const Posts = () => {
    // const dispatch = useDispatch()


    // const postState = useSelector(state => state.post, shallowEqual)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchPosts() {
            try {
                const { data } = await axios.get("/api/posts");
                setPosts(data.posts)
            } catch (error) {
                console.log(error.toString())
            }
        }
        fetchPosts()
    }, [posts])


    // const { posts } = postState.posts
    // const { loading } = postState.loading
    const loading = false
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
