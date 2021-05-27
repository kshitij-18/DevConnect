import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import './Navbar.css'
import { Typography, IconButton, Avatar, Button } from '@material-ui/core'
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';


const Navbar = ({ avatar }) => {
    return (
        <div className="navbar">
            <div className="ghost__elemnt"></div>
            {/* Main heading Icon */}
            <div className="navbar__heading">
                <Typography variant="h4">
                    DevConnect
                    </Typography>
            </div>

            {/* All icons like profile icon */}
            <div className="navbar__icons">
                <IconButton>
                    <ForumOutlinedIcon />
                </IconButton>
                <Button>
                    <Avatar src={avatar} />

                </Button>
            </div>
        </div>
    )
}

export default Navbar
