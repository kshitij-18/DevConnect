import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { getProfileById } from '../../actions/profile'
import Spinner from '../Spinner'
import ProfileTop from './ProfileComponents/ProfileTop'
import ProfileAbout from './ProfileComponents/ProfileAbout'
import ProfileExperience from './ProfileComponents/ProfileExperience'

const ProfileScreen = ({ match }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfileById(match.params.id)).then(() => console.log("Successfully fetched")).catch((e) => console.log(e.toString()))
    }, [dispatch])
    const profileState = useSelector(state => state.profile)
    const authState = useSelector(state => state.auth)
    const { isAuth, user } = authState
    const { loading, profile } = profileState
    console.log(profile)
    console.log(user)
    return (
        <div>
            {
                loading || profile === null && user === null ? <Spinner /> : (
                    <div>
                        <Link to="/viewdevs" class="btn btn-light">Back To Profiles</Link>
                        {
                            isAuth && user._id === profile.profile.user._id ? <Link to='/edit-profile' className="btn btn-dark">Edit Profile</Link> : ''
                        }
                    </div>
                )
            }
            {
                profile && user &&
                <>
                    <ProfileTop profile={profile.profile} user={user} />
                    <ProfileAbout profile={profile.profile} user={user} />
                    {
                        profile.profile.experience.length > 0 &&
                        <ProfileExperience profile={profile.profile} />
                    }
                </>
            }

        </div>
    )
}

export default withRouter(ProfileScreen)
