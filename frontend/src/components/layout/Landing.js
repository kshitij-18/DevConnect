import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'


export const Landing = () => {
    const viewDeveloper = () => {

    }
    return (
        <section class="landing">
            <div class="dark-overlay">
                <div class="landing-inner">
                    <h1 class="x-large">Developer Connector</h1>
                    <p class="lead">
                        Create a developer profile/portfolio, share posts and get help from
                        other developers
          </p>
                    <div class="buttons">
                        <Link to="/register" class="btn btn-primary">Sign Up</Link>
                        <Link to="/login" class="btn btn-light">Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
