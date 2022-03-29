import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {

  const [auth, setAuth] = useContext(AuthContext);

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