import React from "react";
import style from "./index.module.scss";

import Login from "@organisms/LoginPage/Login";
import Footer from "@organisms/LoginPage/Footer";
import loginPhoneImage from "@assets/iphone-img.png";

const LoginPage = props => {
  return (
    <section className={style.container}>
      <main className={style.main}>
        <img className={style.image} alt="iphone-img" src={loginPhoneImage} />
        <Login />
      </main>
      <Footer/>
    </section>
  );
};

export default LoginPage;
