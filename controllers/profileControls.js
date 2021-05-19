const Profile = require('../Database/profiledb')
const User = require('../Database/userdb')
const { validationResult } = require('express-validator')


const profileController = {
    getSelfProfile: async (req, res) => {
        try {
            // Basically populates the profile document with users fields
            const profile = await Profile.findOne({ user: req.user.id }).populate('users', ['name', 'email', 'avatar'])

            if (!profile) {
                res.status(400).json({ msg: "No profile in the database" })
            }
            res.status(200).json({ profile })

        } catch (error) {
            res.status(500).send("Server Error")
        }
    }
    ,
    createUserProfile: async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            company,
            website,
            location,
            bio,
            status,
            githubusername,
            skills,
            youtube,
            facebook,
            twitter,
            instagram,
            linkedin
        } = req.body

        const profileField = {}
        profileField.user = req.user.id
        if (company) profileField.company = company
        if (website) profileField.website = website
        if (location) profileField.location = location
        if (bio) profileField.bio = bio
        if (status) profileField.status = status
        if (githubusername) profileField.githubusername = githubusername
        if (skills) {
            profileField.skills = skills.split(',').map(skill => skill.trim())
        }
        profileField.social = {}
        if (youtube) profileField.social.youtube = youtube
        if (twitter) profileField.social.twitter = twitter
        if (instagram) profileField.social.instagram = instagram
        if (facebook) profileField.social.facebook = facebook

        let profile = await Profile.findOne({ user: req.user.id })

        if (profile) {
            // Update the profile
            profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileField }, { new: true })

            return res.status(200).json({ profile })
        }

        // Create the profile
        profile = await Profile.create(profileField)
        res.status(200).json({ profile })
    },
    getAllProfiles: async (req, res) => {
        try {
            let profiles = await Profile.find().select(['-user'])
            if (!profiles) {
                res.status(404).json({ msg: "No user profile found" })
            }

            res.status(200).json({ profiles })
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Server error")
        }
    },
    getProfileById: async (req, res) => {
        try {
            let id = req.params.id
            let profile = await Profile.findOne({ user: id }).populate('user', ['name', 'email'])

            if (!profile) {
                res.status(404).json({ msg: "Requested Profile not found" })
            }
            res.status(200).json(profile)
        } catch (error) {
            res.status(500).send("Server Error")
        }
    }
}
module.exports = profileController