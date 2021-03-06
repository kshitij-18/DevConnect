import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../layout/Navbar'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import register from '../../actions/auth'

const Register = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth)
    const { isAuth } = authState

    if (isAuth) {
        return <Redirect to='/dashboard' />
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            dispatch(setAlert("Passwords do not match", "danger"))
        }
        else {
            dispatch(register({ name, email, password }))
        }
    }
    return (
        <div>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        name="name"
                        onChange={e => onChange(e)}

                    />
                </div>
                <div className="form-group">
                    <input type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={e => onChange(e)}
                        name="email" />
                    <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
                    >
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}

                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}

                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>
    )
}

export default Register
