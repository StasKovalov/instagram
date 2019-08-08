import React from "react";
import style from "./index.module.scss";

import Form from "@molecules/LoginPage/Login/Form";
import InstagramImg from "@atoms/InstagramImg";
import CreateAccount from "@molecules/LoginPage/Login/CreateAccount";
import InstallApp from "@molecules/LoginPage/Login/InstallApp";
import Line from "@atoms/Line";

const Login = props => {
  return (
    <div className={style.loginSection}>
      <div className={style.loginTop}>
         <InstagramImg loginPage/>
        <Form />
        <div className={style.or}>
          <Line horizontal loginPage/>
             ИЛИ
          <Line horizontal loginPage/>
        </div>
        <span className={style.forgotPassword}>Забыли пароль?</span>
      </div>
      <CreateAccount />
      <InstallApp />
    </div>
  )
}

export default Login;