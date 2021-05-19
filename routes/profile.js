const express = require('express')
const router = express.Router();
const profileController = require('../controllers/profileControls')
const verifyToken = require('../middleware/auth')
const { body } = require('express-validator')

// @route GET /api/profile/me
// @desc Gets the profile of the calling person
// @access PRIVATE
router.get('/me', verifyToken, profileController.getSelfProfile)

// @route POST /api/profile/me
// @desc Creates a user profile
// @access PRIVATE
router.post('/me',
    [
        verifyToken,
        body('status', 'Status is required').not().isEmpty(),
        body('skills', 'Skills is required').not().isEmpty(),
    ],
    profileController.createUserProfile)

module.exports = router