import React from 'react';
import './login.scss';

import Instagram from '../../../../assets/instagram.png';
import SignForm from '../../../molecules/homepage/sign-in-form';
import CreateAccount from '../../../molecules/homepage/create-account';
import InstallApp from '../../../molecules/homepage/install-app';

const Login = props => {
  return (
    <div className='login-section'>
      <div className='login-top'>
        <img className='instagram-logo' src={Instagram} />
        <SignForm />
        <div className='or'>
          <div className='hr'></div>
          ИЛИ
            <div className='hr'></div>
        </div>
        <span className='forgot_password'>Забыли пароль?</span>
      </div>
      <CreateAccount />
      <InstallApp />
    </div>
  )
}


export default Login;