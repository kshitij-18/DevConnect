import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'

const Dashboard = () => {
    const dispatch = useDispatch();
    const profileState = useSelector(state => state.profile)

    useEffect(() => {
        dispatch(getCurrentProfile())
    }, [])

    return (
        <div>
            <h1 className="large text-primary">
                Dashboard
            </h1>
        </div>
    )
}

export default withRouter(Dashboard);
