import React, { useEffect } from 'react'
import Moment from 'react-moment'

const Education = ({ education }) => {
    useEffect(() => {
        console.log(education)
    })
    return (
        <div>
            <h2 className="my-2">
                Education Credentials
            </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className="hide-sm">Field Of Study</th>
                        <th className="hide-sm">Duration</th>
                        <th className="hide-sm">Delete Education</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        education.map(edu => (
                            <tr key={edu._id}>
                                <td>{edu.school}</td>
                                <td className="hide-sm">{edu.fieldOfStudy}</td>
                                <td className="hide-sm">
                                    <Moment format="MMM YY">{edu.from}</Moment> -
                                    {edu.to === null ? ' Current' : <Moment format="MMM YY">{edu.to}</Moment>}
                                </td>
                                <td className="hide-sm">
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Education
