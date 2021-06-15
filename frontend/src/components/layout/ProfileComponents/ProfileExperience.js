import React from 'react'
import Moment from 'react-moment'

const ProfileExperience = ({ profile: { experience } }) => {
    return (
        <>
            <div className="profile-exp bg-white p-2">
                <h2 class="text-primary">Experience</h2>
                {
                    experience.map(exp => (
                        <>
                            <h3 class="text-dark">{exp.company}</h3>
                            <p><Moment format="MMM YYYY">{exp.from}</Moment> - {
                                exp.to ? <Moment format="MMM YYYY">{exp.to}</Moment> :
                                    "Current"
                            }</p>
                            <p><strong>Position: </strong>{exp.role}</p>
                            <p><strong>Description : </strong>{exp.roleDetails}</p>
                        </>

                    ))
                }
            </div>
        </>
    )
}

export default ProfileExperience
