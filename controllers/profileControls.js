const Profile = require('../Database/profiledb')
const User = require('../Database/userdb')
const { validationResult } = require('express-validator')
const moment = require('moment')


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
        if (linkedin) profileField.social.linkedin = linkedin

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
            let profiles = await Profile.find().populate('user', ['name'])
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
            if (error.kind == 'ObjectId') {
                res.status(404).json({ msg: "Profile not found" })
            }
            res.status(500).send("Server Error")
        }
    },
    deleteProfile: async (req, res) => {
        try {
            // todo - Remove posts later
            let profileRemoved = await Profile.findOneAndRemove({ user: req.user.id })
            let userRemoved = await User.findOneAndDelete({ _id: req.user.id })
            if (profileRemoved && userRemoved) {
                res.status(204).json({ msg: "User deleted successfully" })
            } else {
                res.status(400).json({ msg: "Profile and user could not be deleted" })
            }
        } catch (error) {
            res.status(500).send("Server Error")
        }
    },
    updateExperience: async (req, res) => {
        let errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const {
            company,
            from,
            to,
            current,
            role,
            roleDetails
        } = req.body


        let formattedFrom = moment(from, "DD-MM-YYYY").format()
        let formattedTo = moment(to, "DD-MM-YYYY").format()
        const newExp = {
            company,
            current,
            role,
            roleDetails
        }
        newExp.from = formattedFrom
        newExp.to = formattedTo

        try {
            let profile = await Profile.findOne({ user: req.user.id })
            profile.experience.unshift(newExp)

            await profile.save()
            res.status(200).json({ profile })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}
module.exports = profileController