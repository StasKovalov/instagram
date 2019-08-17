import React from "react";
import style from "./index.module.scss";

import Form from "./Form";
import InstagramImg from "@common/InstagramImg";
import CreateAccount from "./CreateAccount";
import InstallApp from "./InstallApp";
import Line from "@common/Line";

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