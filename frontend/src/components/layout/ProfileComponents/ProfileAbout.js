import React from 'react'

const ProfileAbout = ({ profile }) => {
    return (
        <>
            <div class="profile-about bg-light p-2">
                {
                    profile.bio &&
                    <>
                        <h2 className="text-primary">{profile.user.name}'s Bio</h2>
                        <p>{profile.bio}</p>
                        <div className="line"></div>
                        <h2 className="text-primary">Skill Set</h2>
                        <div className="skills">
                            {
                                profile.skills.map(skill => (
                                    <div class="p-1"><i class="fa fa-check"></i> {skill}</div>
                                ))
                            }
                        </div>
                    </>
                }

            </div>
        </>
    )
}

export default ProfileAbout
