const express = require('express')
const router = express.Router();
const userController = require('../controllers/userControls')
const { body } = require('express-validator')
const verifyToken = require('../middleware/auth')

// @route GET /api/users
// @desc Gets all the users in the database
// @access PUBLIC
router.get('/', userController.getUsers)

// @route GET / api / users
// @desc Gets all the users in the database
// @access PRIVATE
router.get('/auth', verifyToken, userController.getAuthUser)

// @route POST /api/users
// @desc Creates a user in the database
// @access PUBLIC
router.post('/',
    // Email should be in email format
    body('email', "Please enter a valid email").isEmail(),
    // Password should be atleast 5 characters long
    body('password', "Please enter a valid password").isLength({ min: 5 }),
    body('name', "Please enter the name").not().isEmpty(),
    userController.createUser)

// @route DELETE /api/users/:id
// @desc Deletes a specific user in the db
// @access PUBLIC
router.delete('/:id', userController.deleteUser)
module.exports = router