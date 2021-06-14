import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProfileById } from '../../actions/profile'
import Spinner from '../Spinner'

const ProfileScreen = ({ match }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfileById(match.params.id))
    }, [])
    const profileState = useSelector(state => state.profile)
    const { loading, profile } = profileState
    console.log(profile.user.name)
    return (
        <div>
            {
                loading && profile === null ? <Spinner /> : (
                    <h2>{profile.user.name}</h2>
                )
            }
        </div>
    )
}

export default withRouter(ProfileScreen)
