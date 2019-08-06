import React from "react";
import style from "./login-page.module.scss";

import Login from "../../organisms/homepage/login";
// import Footer from "../../organisms/homepage/footer";
import loginPhoneImage from "../../../assets/iphone-img.png";

const LoginPage = props => {
  return (
    <section className={style.container}>
      <img className={style.image} alt="iphone-img" src={loginPhoneImage} />
      <Login />
    </section>
  );
};

export default LoginPage;
