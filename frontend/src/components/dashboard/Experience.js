import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteExperience } from '../../actions/profile'
import Moment from 'react-moment'

const Experience = ({ experience }) => {
    const dispatch = useDispatch()
    const deleteExp = (id) => {
        dispatch(deleteExperience(id))
    }

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
                            <tr key={exp._id}>
                                <td>{exp.company}</td>
                                <td className="hide-sm">{exp.role}</td>
                                <td className="hide-sm">
                                    <Moment format="MMM YY">{exp.from}</Moment> -
                                    {exp.to === null ? ' Current' : <Moment format="MMM YY">{exp.to}</Moment>}
                                </td>
                                <td className="hide-sm">
                                    <button className="btn btn-danger" onClick={() => deleteExp(exp._id)}>Delete</button>
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
