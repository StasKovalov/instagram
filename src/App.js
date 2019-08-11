import React from "react";
import "./App.scss";

import ProfilePage from "@pages/ProfilePage";
import Main from "@pages/Main";

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

const App = () => (
  <Main/>
);


export default App;
