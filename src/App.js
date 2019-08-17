import React from "react";
import "./App.scss";

import Layout from "@components/Layout";
import ProfilePage from "@containers/ProfilePage";
import Main from "@containers/Main";
import {connect} from "react-redux";
import LoginPage from "@containers/LoginPage";
import { Route, Switch, Redirect } from "react-router-dom";


/*

1) Испарвить косяки при импорте + почитать за require.
2) Исправить  роутинг на сайте. Два раза идет рендер, плохо.
3) Сделать users/:username.
4) Картинки object-fit протестить.

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
      <Route path="/" exact render={() => (isAuth ? <Main/> : <LoginPage/>  )}/>
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
