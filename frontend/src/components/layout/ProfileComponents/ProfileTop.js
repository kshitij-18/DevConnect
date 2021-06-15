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
                <h1 class="large">{profile.user.name}</h1>
                <p class="lead">{profile.status && profile.company ? profile.status + " at " + profile.company : profile.status}</p>
                <p>{profile.location && <span>{profile.location}</span>}</p>
                <div class="icons my-1">
                    {
                        profile.website && <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-globe fa-2x"></i>
                        </a>
                    }
                    {profile.social && profile.social.twitter &&
                        <a href={profile.social.twitter.startsWith('https') ? profile.social.twitter : `https://${profile.social.twitter}`} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>
                    }
                    {profile.social && profile.social.facebook &&
                        <a href={profile.social.facebook.startsWith('https') ? profile.social.facebook : `https://${profile.social.facebook}`} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-facebook fa-2x"></i>
                        </a>
                    }
                    {profile.social && profile.social.linkedin &&
                        <a href={profile.social.linkedin.startsWith('https') ? profile.social.linkedin : `https://${profile.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    }
                    {
                        profile.social && profile.social.youtube &&
                        <a href={profile.social.youtube.startsWith('https') ? profile.social.youtube : `https://${profile.social.youtube}`} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-youtube fa-2x"></i>
                        </a>
                    }
                    {
                        profile.social && profile.social.instagram &&
                        <a href={profile.social.instagram.startsWith('https') ? profile.social.instagram : `https://${profile.social.instagram}`} target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>
                    }

                </div>
            </div>
        </div >
    )
}

export default ProfileTop
