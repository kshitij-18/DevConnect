const User = require('../Database/userdb')
const Post = require('../Database/postdb')
// const verifyToken = require('../middleware/auth')

postController = {
    getAllPosts: async (req, res) => {
        try {
            let posts = await Post.find().sort({ date: -1 })
            res.json(posts)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Server error")
        }

    }
    ,
    createPosts: async (req, res) => {
        try {
            let user = await User.findById(req.user.id).select('-password')

            const newPost = {
                user: req.user.id,
                name: user.name,
                avatar: user.avatar,
                text: req.body.text
            }

            let result = await Post.create(newPost)
            res.json(result)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Server error")
        }
    },
    deletePost: async (req, res) => {
        try {
            let post = await Post.findByIdAndRemove(req.params.id)
            res.json({ msg: "Post successfully deleted", post })
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Server error")
        }
    },
    likePost: async (req, res) => {
        try {
            let post = await Post.findById(req.params.id)
            let likes = post.likes

            let userExist = likes.filter(like => like.user.toString() === req.user.id)
            console.log(userExist)
            // User has already liked the post
            if (!(userExist.length === 0)) {
                let index = likes.indexOf(userExist[0])
                console.log(req.user.name + "I am disliking post")
                likes.splice(index, 1)
            } else {
                console.log(req.user.name + "I am liking post")
                likes.unshift({
                    user: req.user.id
                })
            }



            post.likes = likes
            await post.save()

            res.json(post)

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Server error")
        }
    },
    // dislikePost: async (req, res) => {
    //     try {
    //         // check if the user exists in the likes array
    //         let post = Post.findById(req.params.id)
    //     } catch (error) {
    //         console.error(error.message)
    //         res.status(500).send("Server error")
    //     }
    // }
}

module.exports = postController