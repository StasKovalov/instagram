import React from "react";
import "./App.scss";

import store from "@redux/store";
import { getAuth } from "@redux/actionCreators"
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "@components/Layout";
import ProfilePage from "@containers/ProfilePage";
import Main from "@containers/Main";
import LoginPage from "@containers/LoginPage";


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

const isAuth = JSON.parse(localStorage.getItem('isAuth'));
const authUser = localStorage.getItem('authUser');

console.log(isAuth, authUser)

if (isAuth) {
  store.dispatch(getAuth(authUser));
}

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)} />
)


const App = (props) => (
  <Layout>
    <Switch>
      {/* <Route path="/" exact render={() => <Redirect to={isAuth ? "/main" : "/login"} />}/>
      <Route path="/login" exact render={() => <LoginPage isAuth={isAuth}/>} />
      <PrivateRoute path="/main" exact component={Main} />
      <PrivateRoute path="/user/:username" exact component={ProfilePage} /> */}
      <ProfilePage/>
    </Switch>
  </Layout>
);

export default App;
