import React from 'react';
import './login.scss';

import Instagram from '../../../../assets/instagram.png';
import SignForm from '../../../molecules/homepage/sign-in-form';
import CreateAccount from '../../../molecules/homepage/create-account';
import InstallApp from '../../../molecules/homepage/install-app';

const Login = props => {
    return (
        <div className='login-section'>
            <img className = 'instagram-logo' src = {Instagram} />
            <SignForm/>
            <div className='or'>
                ИЛИ
              </div>
            <span className='forgot password'>
                Забыли пароль
              </span>
              <CreateAccount/>
            <InstallApp/>
        </div>
    )
}


export default Login;