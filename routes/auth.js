const express = require('express')
const router = express.Router();
const authController = require('../controllers/authControls')
const verifyToken = require('../middleware/auth')
const { body } = require('express-validator')

// @route GET /api/users
// @desc Gets all the users in the database
// @access PUBLIC
router.get('/', verifyToken, authController.showUser)

// @route POST /api/auth
// @desc Signs and gives a token back for the user (Sign in)
// @access PUBLIC
router.post('/',
    [
        body('email', 'Please enter a valid email').isEmail(),
        body('password', 'Password is required').exists()
    ],
    authController.Login
)

module.exports = router