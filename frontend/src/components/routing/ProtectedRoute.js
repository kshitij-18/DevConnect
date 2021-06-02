import React from 'react'
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ loading, isAuth, component: Component, ...rest }) {
    return (
        <div>
            <Route
                {...rest}
                render={props => {
                    if (isAuth && !loading) {
                        return <Component />
                    } else if (!isAuth && !loading) {
                        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    }
                }}
            ></Route>
        </div>
    )
}

export default ProtectedRoute
