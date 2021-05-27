import React from 'react'
import { Button } from '@material-ui/core'
import './Landing.css'

export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__heading">
                <div className="ghost"></div>
                <h1>Developer Connect</h1>
                <div className="landing__developers">
                    <Button color="inherit" variant="contained">View Developers</Button>
                </div>
            </div>
            <div className="landing__text">
                <p>Do you want to be a part of an evergrowing Developer Community then jump right in.</p>
            </div>
            <div className="signin__options">
                <div className="signin__buttons" id="signin">
                    <Button color="inherit" variant="contained">SignIn</Button>
                </div>
                <div className="signin__buttons" id="signup">
                    <Button color="inherit" variant="contained">SignUp</Button>
                </div>
            </div>
        </div>
    )
}
