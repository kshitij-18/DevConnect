import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Typography, IconButton, Avatar, Button } from '@material-ui/core'
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import { Link } from 'react-router-dom'

const Navbar = ({ avatar }) => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
            </h1>
            <ul>
                <li><Link to="/viewdevs">Developers</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
