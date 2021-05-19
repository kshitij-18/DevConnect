const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    // To connect this table to a specific user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    company: {
        type: String
    },
    website: String,
    location: String,
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    }
    ,
    social: {
        facebook: String,
        twitter: String,
        youtube: String,
        linkedin: String,
        instagram: String
    },
    experience: [{
        company: String,
        from: {
            type: Date
        },
        to: {
            type: Date
        },
        current: {
            type: Boolean,
            default: false
        },
        role: {
            type: String
        },
        roleDetails: {
            type: String
        }
    }],
    education: [{
        school: String,
        from: {
            type: Date
        },
        to: {
            type: Date
        },
        current: {
            type: Boolean,
            default: false
        },
        fieldOfStudy: {
            type: String
        },
        description: {
            type: String
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

const profileModel = mongoose.model('Profile', profileSchema)
module.exports = profileModel
