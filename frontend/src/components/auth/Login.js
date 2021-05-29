import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <Navbar></Navbar>
            <section class="container">
                <div class="alert alert-danger">
                    Invalid credentials
      </div>
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
            </section>
        </div>
    )
}

export default Login