import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'

const DevList = () => {
    const [devs, setDevs] = useState([])
    useEffect(() => {
        async function fetchDevs() {
            try {
                const res = await axios.get('/api/profile/all')
                let profiles = res.data.profiles
                console.log(profiles)
                setDevs([...profiles])
                return
            } catch (error) {
                console.log(error.message)
            }

        }
        fetchDevs();
    }, [])
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
            <Navbar></Navbar>
            <section className="container">
                <h1 className="large text-primary">
                    Developers
                </h1>
                <div className="profiles">
                    {
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
                                    <Link to={`/profile/${dev._id}`} className="btn btn-primary">View Profile</Link>
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
            </section>
        </div>

    )
}

export default DevList
