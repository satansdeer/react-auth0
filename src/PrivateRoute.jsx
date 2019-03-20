import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "./Auth";

export const PrivateRoute = withAuth(
  ({ component: RouteComponent, isAuthorized, loginPath, ...rest }) => (
    <Route
      {...rest}
      render={routeProps =>
        isAuthorized ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  )
);
