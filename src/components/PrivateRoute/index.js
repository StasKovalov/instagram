import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUser.authUser ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default connect(({ currentUser }) => ({ currentUser }))(PrivateRoute);
