const Users = require('../Database/userdb')
const { validationResult } = require('express-validator')
const userController = {
    // Gets all the users
    getUsers: (req, res) => {
        Users.find().then(users => {
            res.status(200).json({ users })
        }).catch(err => {
            res.status(400).json({ msg: "Something went wrong" })
        })
    },

    createUser: (req, res) => {
        // console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        Users.create(req.body).then(user => {
            res.status(201).json(user)
        })
    },

    deleteUser: (req, res) => {
        const id = req.params.id;
        Users.deleteOne({ _id: id }).then(() => {
            res.status(200).json({ msg: "User deleted successfully" })
        }).catch(err => {
            res.status(404).json({ msg: "Error in deleting" })
        })
    }
}

module.exports = userController