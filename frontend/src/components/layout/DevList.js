import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from './Navbar'
import { getAllProfiles } from '../../actions/profile'

const DevList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProfiles())
    }, [])

    const profileState = useSelector(state => state.profile)
    console.log(profileState.profiles.profiles)
    const devs = profileState.profiles.profiles
    return (

        <div className="devlopers">
            {/* <nav class="navbar bg-dark">
                <h1>
                    <a href="index.html"><i class="fas fa-code"></i> DevConnector</a>
                </h1>
                <ul>
                    <li><a href="profiles.html">Developers</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </nav> */}
            <h1 className="large text-primary">
                Developers
            </h1>
            <div className="profiles">
                {devs &&
                    devs.map(dev => (
                        <div className="profile bg-light">
                            <img
                                className="round-img"
                                src={dev.user.avatar}
                                alt=""
                            />
                            <div>
                                <h2>{dev.user.name}</h2>
                                <p>{dev.status && dev.company ? dev.status + " at " + dev.company : dev.status}</p>
                                <p>{dev.location}</p>
                                <Link to={`/profile/${dev.user._id}`} className="btn btn-primary">View Profile</Link>
                            </div>
                            <ul>
                                {
                                    dev.skills.map(skill => (
                                        <li>
                                            <i class="fas fa-check"></i>
                                            {" " + skill}
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default DevList
