import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../Spinner'
import DashboardActionLinks from './DashboardActionLinks'
import Experience from './Experience'
import Education from './Education'
import { deleteAccount } from '../../actions/profile'


const Dashboard = () => {
    const dispatch = useDispatch();

    const authState = useSelector(state => state.auth)



    useEffect(() => {
        dispatch(getCurrentProfile())
    }, [])
    const profileState = useSelector(state => state.profile)
    const { loading, profile } = profileState
    const { user } = authState
    // console.log("This is the profile from Dashboard ")
    // console.log(profile)
    console.log(profile)

    const accountDelete = () => {
        dispatch(deleteAccount())
    }

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
                    <Experience experience={profile.profile.experience} />
                    <Education education={profile.profile.education} />

                    <div className="my-2">
                        <button className="btn btn-danger" onClick={accountDelete}>
                            <i className="fas fa-user-minus"></i> Delete My Account
                        </button>
                    </div>
                </>) : (

                    <>
                        <p>You have not yet setup a profile</p>
                        <Link to="/create-profile" className="btn btn-primary my-1" >
                            Create Profile
                        </Link>
                    </>)
            }
            {/*  */}
            {/* <Experience experiences={profile.experience} /> */}

        </div>
    )
}

export default withRouter(Dashboard);
