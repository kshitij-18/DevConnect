import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment'

const Experience = ({ experience }) => {
    return (
        <div>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Duration</th>
                        <th className="hide-sm">
                            Delete Experience
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        experience.map(exp => (
                            <tr>
                                <td>{exp.company}</td>
                                <td className="hide-sm">{exp.role}</td>
                                <td className="hide-sm">
                                    <Moment format="MMM YY">{exp.from}</Moment> -
                                    {exp.to === null ? ' Current' : <Moment format="MMM YY">{exp.to}</Moment>}
                                </td>
                                <td className="hide-sm">
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Experience
