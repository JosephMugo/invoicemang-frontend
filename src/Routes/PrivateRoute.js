import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Auth/useAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.history.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;