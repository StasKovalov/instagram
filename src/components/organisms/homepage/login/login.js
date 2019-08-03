import React from 'react';
import style from './login.module.scss';

import Form from '../../../molecules/homepage/form';
import InstagramImg from '../../../atoms/instagram-img';
import CreateAccount from '../../../molecules/homepage/create-account';
import InstallApp from '../../../molecules/homepage/install-app';
import Line from '../../../atoms/line';

const Login = props => {
  return (
    <div className={style.loginSection}>
      <div className={style.loginTop}>
         <InstagramImg loginPage/>
        <Form />
        <div className={style.or}>
          <Line />
          ИЛИ
          <Line />
        </div>
        <span className={style.forgotPassword}>Забыли пароль?</span>
      </div>
      <CreateAccount />
      <InstallApp />
    </div>
  )
}

export default Login;