import React from "react";
import "./App.scss";

import store from "@redux/store";
import { setCurrentUser } from "@redux/actionCreators";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout, { AutoScrollWrapper } from "@containers/Layout";
import ProfilePage from "@containers/ProfilePage";
import FullPost from "@containers/FullPublication";
import Main from "@containers/Main";
import LoginPage from "@containers/LoginPage";
import PrivateRoute from "@components/PrivateRoute";

const currentUser = localStorage.getItem("currentUser");

if (currentUser) {
  store.dispatch(setCurrentUser(currentUser));
}

const App = () => (
  <AutoScrollWrapper>
    <Layout>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/main" />} />
        <Route path="/login" exact component={LoginPage} />
        <PrivateRoute path="/main" exact component={Main} />
        <PrivateRoute path="/user/:username" component={ProfilePage} />
        <PrivateRoute path="/p/:id" component={FullPost} />
      </Switch>
    </Layout>
  </AutoScrollWrapper>
);

export default App;
