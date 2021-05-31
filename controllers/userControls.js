const Users = require('../Database/userdb')
const gravatar = require('gravatar')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    // Gets all the users
    getUsers: (req, res) => {
        Users.find().then(users => {
            res.status(200).json({ users })
        }).catch(err => {
            res.status(400).json({ msg: "Something went wrong" })
        })
    },

    createUser: async (req, res) => {
        // console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body

        // See if user exists
        let userInDb = await Users.findOne({ email })
        if (userInDb) {
            return res.status(400).json({
                errors: [
                    {
                        msg: "User already exists"
                    }
                ]
            })
        }

        // Get users gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        let user = new Users({
            name,
            email,
            password,
            avatar
        })
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save()

        // return jsonwebtoken to login right away
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload,
            process.env.JWT_SECRET,
            { expiresIn: 3600000 },
            (err, token) => {
                if (err) throw err
                res.json({ token: token })
            })
        // Users.create(req.body).then(user => {
        //     res.status(201).json(user)
        // })

        // res.status(200).json({ msg: "User created successfully", user })
    },

    deleteUser: (req, res) => {
        const id = req.params.id;
        Users.deleteOne({ _id: id }).then(() => {
            res.status(200).json({ msg: "User deleted successfully" })
        }).catch(err => {
            res.status(404).json({ msg: "Error in deleting" })
        })
    },
    getAuthUser: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password')
            res.json(user)
        } catch (error) {
            res.status(400).json({ msg: "Could not get the user" })
        }
    }
}

module.exports = userController