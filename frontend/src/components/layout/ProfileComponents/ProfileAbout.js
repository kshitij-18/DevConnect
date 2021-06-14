import React from 'react'

const ProfileAbout = ({ profile, user }) => {
    return (
        <>
            <div class="profile-about bg-light p-2">
                {
                    profile.bio &&
                    <>
                        <h2 className="text-primary">{user.name}'s Bio</h2>
                        <p>{profile.bio}</p>
                    </>
                }

            </div>
        </>
    )
}

export default ProfileAbout
