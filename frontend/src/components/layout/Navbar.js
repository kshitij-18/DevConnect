import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { loadUser, logout } from '../../actions/auth'


const Navbar = ({ avatar }) => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    const { isAuth, loading } = authState

    // const handleLogout = () => {
    //     localStorage.removeItem('token');
    //     dispatch(loadUser);
    //     return <Redirect to='/' />
    // }
    const Logout = () => {
        dispatch(logout())
    }
    const authLinks = (
        <ul>
            <li > <Link to='#!' onClick={Logout}>
                <i className="fas fa-sign-out-alt" />{' '}
                <span className="hide-sm">Logout</span>
            </Link></li>
        </ul>
    )

    const guestLinks = (
        <ul>
            <li > <Link to="/viewdevs">Developers</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    )


    return (
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
                </h1>
                {
                    !loading && (isAuth ? authLinks : guestLinks)
                }
            </nav>
        </div>
    )
}

export default Navbar
