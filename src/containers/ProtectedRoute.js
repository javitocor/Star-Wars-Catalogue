import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = (props) => {
  const { type, redirectPath, component, user, loggedIn, ...routeProps } = props;
  const Component = component;
  const isAccessible = Boolean(user) && loggedIn;

  return (
    <Route
      {...routeProps}
      render={(props) => {
        if (type ==='guest' && isAccessible  ) return <Component {...props} />;

        const state = { from: props.location };
        const pathname = redirectPath || "/login";

        return <Redirect to={{ state, pathname }} />;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(ProtectedRoute);