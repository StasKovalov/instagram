import React from "react";
import "./App.scss";

import Layout from "@pages/Layout";
import ProfilePage from "@pages/ProfilePage";
import Main from "@pages/Main";
import {connect} from "react-redux";
import LoginPage from "@pages/LoginPage";
import { Route, Switch, Redirect } from "react-router-dom";


/*

const isAuth = LocaleStorage.getItem("isAuth");

const App = () => (
  <Layout>
    <Switch>
      <Router path="/" render={() => <Redirect to={isAuth ? "Main" : "Login"} />} />
      <Main/>
      <Login/>
      <Profile/>
    </Switch>
  </Layout>
);
*/

const App = ({ isAuth, authUser}) => (
  <Layout>
    <Switch>
      <Route path="/" exact render={() => (isAuth ? <Main /> : <LoginPage/>  )}/>
      <Route path="/:username" render={({match}) => {
        const {username} = match.params;
        return isAuth ? <ProfilePage username={username}/> : null} 
      } />
    </Switch>
  </Layout>
);

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth,
    authUser: state.authUser
  }
}

export default connect(mapStateToProps)(App);
