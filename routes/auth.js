const express = require('express')
const router = express.Router();
const authController = require('../controllers/authControls')
const verifyToken = require('../middleware/auth')

// @route GET /api/users
// @desc Gets all the users in the database
// @access PUBLIC
router.get('/', verifyToken, authController.login)

module.exports = router