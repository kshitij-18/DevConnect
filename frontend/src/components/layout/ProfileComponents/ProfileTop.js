import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const ProfileTop = ({ profile, user }) => {
    console.log(profile, user)
    const goToWebsite = (website) => {
        return <Redirect to={website} />
    }
    return (
        <div>
            <div className="profile-top bg-primary p-2 my-1">
                <img
                    class="round-img my-1"
                    src={user.avatar}
                    alt=""
                />
                <h1 class="large">{user.name}</h1>
                <p class="lead">{profile.status && profile.company ? profile.status + " at " + profile.company : profile.status}</p>
                <p>{profile.location}</p>
                {/* <div class="icons my-1">
                    <a href={profile.website} target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-globe fa-2x"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-youtube fa-2x"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default ProfileTop
