import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEducation } from '../../actions/profile'
import { withRouter } from "react-router-dom"

const AddEducation = ({ history }) => {
    const initialState = {
        school: '',
        from: '',
        to: '',
        current: false,
        fieldOfStudy: '',
        description: ''
    }

    const [formData, setFormData] = useState(initialState)
    const [isCurrentSchool, setIsCurrentSchool] = useState(false)
    const dispatch = useDispatch()

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const clickOnCurrentSchool = (e) => {
        // setIsCurrentSchool(!isCurrentSchool)
        setFormData({ ...formData, current: !e.target.value })
        console.log(current)
    }

    const {
        school,
        from,
        to,
        current,
        fieldOfStudy,
        description
    } = formData

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(addEducation(formData, history))
    }

    return (
        <div>
            <h1 class="large text-primary">
                Add Your Education
            </h1>
            <p class="lead">
                <i class="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
                you have attended
            </p>
            <small>* = required field</small>
            <form class="form" onSubmit={submitHandler}>
                <div class="form-group">
                    <input
                        type="text"
                        placeholder="* School or Bootcamp"
                        name="school"
                        value={school}
                        onChange={onChange}
                        required
                    />
                </div>
                {/* <div class="form-group">
                    <input
                        type="text"
                        placeholder="* Degree or Certificate"
                        name="degree"
                        required
                    />
                </div> */}
                <div class="form-group">
                    <input type="text"
                        placeholder="Field Of Study"
                        name="fieldOfStudy"
                        value={fieldOfStudy}
                        onChange={onChange}
                    />
                </div>
                <div class="form-group">
                    <h4>From Date</h4>
                    <input type="date"
                        name="from"
                        value={from}
                        onChange={onChange}
                    />
                </div>
                <div class="form-group">
                    <p>
                        <input type="checkbox" name="current" value={current} onChange={e => {
                            setFormData({ ...formData, current: !current })
                            setIsCurrentSchool(!isCurrentSchool)
                        }} /> Current School or Bootcamp
                    </p>
                </div>
                <div class="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={to} onChange={onChange} disabled={isCurrentSchool ? 'disabled' : ''} />
                </div>
                <div class="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Program Description"
                        value={description}
                        onChange={onChange}
                    ></textarea>
                </div>
                <input type="submit" class="btn btn-primary my-1" />
                <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
            </form>
        </div>
    )
}

export default withRouter(AddEducation)
