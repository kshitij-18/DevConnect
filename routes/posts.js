const express = require('express')
const router = express.Router();
const postController = require('../controllers/postControls')
const verifyToken = require('../middleware/auth')

// @route GET /api/posts
// @desc Gets all the posts
// @access PRIVATE
router.get('/', verifyToken, postController.getAllPosts)

// @route POST /api/posts
// @desc Creates a post
// @access PRIVATE
router.post('/', verifyToken, postController.createPosts)

// @route DELETE /api/posts/:id
// @desc Deletes a post
// @access PRIVATE
router.delete('/:id', verifyToken, postController.deletePost)

// @route PUT /api/posts/like_post/:id
// @desc Like a post
// @access PRIVATE
router.put('/like_post/:id', verifyToken, postController.likePost)

// @route PUT /api/posts/addComment/:post_id
// @desc Comment on a post
// @access PRIVATE
router.put('/addComment/:post_id', verifyToken, postController.addComment)

// @route PUT /api/posts/deleteComment/:post_id/:comment_id
// @desc Comment on a post
// @access PRIVATE
router.delete('/deleteComment/:post_id/:comment_id', verifyToken, postController.deleteComment)

module.exports = router