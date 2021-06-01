import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom'
import { loginAction } from '../../actions/auth'
import { useDispatch } from 'react-redux'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const { email, password } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {

            dispatch(loginAction({ email, password }))
            console.log({
                email, password
            })
        }
        else {
            console.log('ERRRRROOOOORRRRRRR')
            console.log({
                email, password
            })
        }
    }

    return (
        <div>



            <h1 class="large text-primary">Sign In</h1>
            <p class="lead"><i class="fas fa-user"></i> Sign into Your Account</p>
            <form class="form" onSubmit={handleSubmit}>
                <div class="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div class="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <input type="submit" class="btn btn-primary" value="Login" />
            </form>
            <p class="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </div>
    )
}

export default Login
