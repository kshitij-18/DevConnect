const express = require('express')
const router = express.Router();
const userController = require('../controllers/profileControls')

// @route GET /api/users
// @desc Gets all the users in the database
// @access PUBLIC
// router.get('/', userController.getUsers)

module.exports = router