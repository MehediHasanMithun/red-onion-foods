import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userInfoContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [userInfo] = useContext(userInfoContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                userInfo.isSignIn ? (children) : (<Redirect to={{
                    pathname: "/login",
                    state: { from: location }
                }}

                />)

            }

        />
    );
};

export default PrivateRoute;