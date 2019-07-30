import React from 'react';
import './login.scss';

const Login = props => {
    return (
        <div className='login-section'>
            <h1>Instagram</h1>
            <form className='login-form'>
                <div className='login-input'>
                    <input placeholder='Номер телефона, имя пользователя или эл. адрес' />
                </div>
                <div className='login-input'>
                    <input placeholder='Пароль' />
                </div>
                <button>Войти</button>
            </form>
            <div className='or'>
                ИЛИ
              </div>
            <span className='forgot password'>
                Забыли пароль
              </span>
        </div>
    )
}


export default Login;