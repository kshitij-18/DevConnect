const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref = 'users'
    },
    // title: {
    //     type: String,
    //     required: true,
    // },
    body: {
        type: String,
        required: true
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId
            }
        }
    ],
    avatar: {
        type: String
    },
    name: {
        type: String
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId
            },
            name: {
                type: String,
                required: true
            },
            avatar: {
                type: String
            },
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post