import React from 'react';
import style from './login.module.scss';

import Form from '../../../molecules/login-page/login/form';
import InstagramImg from '../../../atoms/instagram-img';
import CreateAccount from '../../../molecules/login-page/login/create-account';
import InstallApp from '../../../molecules/login-page/login/install-app';
import Line from '../../../atoms/line';

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