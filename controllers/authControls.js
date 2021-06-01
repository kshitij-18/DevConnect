const User = require('../Database/userdb')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

const authController = {
    showUser: async (req, res) => {
        try {
            let user = await User.findById(req.user.id).select('-password')
            res.status(200).json(user)
        } catch (error) {
            console.log(error.message)
            res.status(500).send("Server Error")
        }
    },
    Login: async (req, res) => {
        // console.log(req.body)
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() })
        // }

        // Destructuring what is coming from the Request (the form basically)
        const { email, password } = req.body

        // See if user exists
        console.log(email)
        let user = await User.findOne({ email: email })
        console.log(user)
        if (!user) {
            return res.status(401).json({ errors: [{ msg: "User does not exist" }] })
        }

        const verified = await bcrypt.compare(password, user.password)
        if (!verified) {
            return res.status(401).json({ errors: [{ msg: "Please enter a valid password" }] })
        }

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
    }
}
module.exports = authController