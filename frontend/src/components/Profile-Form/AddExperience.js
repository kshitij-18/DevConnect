import React, { useState } from 'react'
import { addExperience } from '../../actions/profile'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, Link } from "react-router-dom"

const AddExperience = ({ history }) => {
    const initialState = {
        company: '',
        from: '',
        to: '',
        current: false,
        role: '',
        roleDetails: ''
    }

    const [formData, setFormData] = useState(initialState)
    const [currentlyWorking, setCurrentlyWorking] = useState(false)

    const dispatch = useDispatch()

    const {
        company,
        from,
        to,
        current,
        role,
        roleDetails
    } = formData

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(addExperience(formData, history))
    }

    return (
        <div>
            <h1 class="large text-primary">
                Add An Experience
      </h1>
            <p class="lead">
                <i class="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
            <small>* = required field</small>
            <form class="form" onSubmit={handleSubmit}>
                <div class="form-group">
                    <input type="text" placeholder="* Job Title" name="role" value={role} onChange={onChange} required />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="* Company" name="company" value={company} onChange={onChange} required />
                </div>
                {/* <div class="form-group">
                    <input type="text" placeholder="Location" name="location" />
                </div> */}
                <div class="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from} onChange={onChange} />
                </div>
                <div class="form-group">
                    <p><input type="checkbox" name="current" value={current} onChange={e => {
                        setFormData({ ...formData, current: !current })
                        setCurrentlyWorking(!currentlyWorking)
                    }} /> Current Job</p>
                </div>
                <div class="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={to} onChange={onChange} disabled={currentlyWorking ? 'disabled' : ''} />
                </div>
                <div class="form-group">
                    <textarea
                        name="roleDetails"
                        cols="30"
                        rows="5"
                        placeholder="Job Description"
                        value={roleDetails}
                        onChange={onChange}
                    ></textarea>
                </div>
                <input type="submit" class="btn btn-primary my-1" />
                <Link class="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </div>
    )
}

export default withRouter(AddExperience)
