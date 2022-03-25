import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Auth/useAuth";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const auth = useAuth();

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route
            {...rest}
            render={(props) =>
                auth && restricted ?
                    <Redirect to={{
                        pathname: "/dashboard/view",
                        state: { from: props.history.location }
                    }} /> : <Component {...props} />
            }
        />
    );
};

export default PublicRoute;