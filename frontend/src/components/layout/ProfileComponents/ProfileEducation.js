import React from 'react'
import Moment from 'react-moment'

const ProfileEducation = ({ profile: { education } }) => {
    return (
        <>
            <div className="profile-edu bg-white p-2">
                <h2 className="text-primary">Education</h2>
                <div>
                    {
                        education.map(edu => (
                            <>
                                <h3>{edu.school}</h3>
                                <p><Moment format="MMM YYYY">{edu.from}</Moment> - {
                                    edu.to ? <Moment format="MMM YYYY">{edu.to}</Moment> : "Current"
                                }</p>

                                <p><strong>Degree: </strong>{edu.fieldOfStudy}</p>
                                {
                                    edu.description &&
                                    <p><strong>Description: </strong>{edu.description}</p>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProfileEducation
