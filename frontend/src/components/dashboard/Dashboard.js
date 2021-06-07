import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../Spinner'
import DashboardActionLinks from './DashboardActionLinks'


const Dashboard = () => {
    const dispatch = useDispatch();
    const profileState = useSelector(state => state.profile)
    const authState = useSelector(state => state.auth)

    const { loading, profile } = profileState
    const { user } = authState

    useEffect(() => {
        dispatch(getCurrentProfile())
    }, [])

    return (
        <div>
            {
                loading && profile === null ? <Spinner /> : (<>

                    <h1 className="large text-primary">
                        Dashboard
                    </h1>

                    <p className="lead">
                        <i className="fas fa-user"></i>{" "}
                         Welcome {user && user.name}
                    </p>
                </>)


            }

            {
                profile !== null ? (<>
                    <DashboardActionLinks />
                </>) : (

                    <>
                        <p>You have not yet setup a profile</p>
                        <Link to="/create-profile" className="btn btn-primary my-1" >
                            Create Profile
                        </Link>
                    </>)
            }
            {/*  */}
        </div>
    )
}

export default withRouter(Dashboard);
