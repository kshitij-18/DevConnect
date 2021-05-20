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

// @route GET /api/profile/all
// @desc Returns all the user profiles
// @access PRIVATE
router.get('/all', verifyToken, profileController.getAllProfiles)

// @route GET /api/profile/:id
// @desc Returns the profile of the specified user id
// @access PRIVATE
router.get('/:id', verifyToken, profileController.getProfileById)

// @route DELETE /api/profile/delete
// @desc Deletes the id of the user
// @access PRIVATE
router.delete('/delete', verifyToken, profileController.deleteProfile)

// @route PUT /api/profile/experience/update
// @desc Updates the expereince profile of the user
// @access PRIVATE
router.put('/experience/update', [verifyToken,
    body('role', "Job title is required").not().isEmpty(),
    body('company', 'Company name is required').not().isEmpty(),
    body('from', "Please provide valid date type").isDate({ format: "DD-MM-YYYY" })],

    profileController.updateExperience)
module.exports = router