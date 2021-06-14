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
// @access PUBLIC
router.get('/all', profileController.getAllProfiles)

// @route GET /api/profile/:id
// @desc Returns the profile of the specified user id
// @access PUBLIC
router.get('/:id', profileController.getProfileById)

// @route DELETE /api/profile/delete
// @desc Deletes the id of the user
// @access PRIVATE
router.delete('/delete', verifyToken, profileController.deleteProfile)

// @route PUT /api/profile/experience/update
// @desc Updates the expereince profile of the user
// @access PRIVATE
router.put('/experience/update', [verifyToken,
    body('role', "Job title is required").not().isEmpty(),
    body('company', 'Company name is required').not().isEmpty(),],
    profileController.addExperience)

// @route DELETE /api/profile/experience/:exp_id
// @desc Deletes the specific experience of the specific user
// @access PRIVATE
router.delete('/experience/:exp_id', verifyToken, profileController.deleteExperienceDetails)

// @route PUT /api/profile/education
// @desc Adds the education of the user
// @access PRIVATE
router.put('/education', [
    verifyToken,
    body('school', "Please provide a school name").notEmpty(),
    // body('from', "Please enter a valid date").isDate({ format: "YYYY-MM-DD" })
], profileController.addEducation)

// @route DELETE /api/profile/education/:edu_id
// @desc Deletes the specific education of the specific user
// @access PRIVATE
router.delete('/education/:edu_id', verifyToken, profileController.deleteEducationDetails)

// @route GET /api/profile/github/:username
// @desc Gets the repositories of the username specified
// @access PUBLIC
router.get('/github/:username', profileController.getGithubRepos)
module.exports = router