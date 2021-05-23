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

module.exports = router