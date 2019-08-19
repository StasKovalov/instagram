import React from "react";
import "./App.scss";

import store from "@redux/store";
import { setCurrentUser } from "@redux/actionCreators";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "@components/Layout";
import ProfilePage from "@containers/ProfilePage";
import Main from "@containers/Main";
import LoginPage from "@containers/LoginPage";
import PrivateRoute from "@components/PrivateRoute";

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

const currentUser = localStorage.getItem("currentUser");

if (currentUser) {
  store.dispatch(setCurrentUser(currentUser));
}

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/main" />} />
      <Route path="/login" exact component={LoginPage} />
      <PrivateRoute path="/main" exact component={Main} />
      <PrivateRoute path="/user/:username" component={ProfilePage} />
    </Switch>
  </Layout>
);

export default App;
