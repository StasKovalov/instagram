import React, {Component} from "react";
import style from "./index.module.scss";

import Login from "@components/LoginPage/Login";
import loginPhoneImage from "@assets/iphone-img.png";

class LoginPage extends Component {
  render() {
    return (
      <section className={style.container}>
        <main className={style.main}>
          <img className={style.image} alt="iphone-img" src={loginPhoneImage} />
          <Login />
        </main>
      </section>
    );
  }
};

export default LoginPage;
