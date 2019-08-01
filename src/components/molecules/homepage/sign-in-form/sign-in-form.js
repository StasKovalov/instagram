import React from 'react';
import './sign-in-form.scss';

import Input from '../../../atoms/input';

const SignForm = props => {
    return (
        <form className='login-form'>
            <div className='login-input'>
                <Input placeholder='Номер телефона, имя пользователя или эл. адрес' />
            </div>
            <div className='login-input'>
                <Input placeholder='Пароль' />
            </div>
            <button className = 'sign-in__button'>Войти</button>
        </form>
    )
}

export default SignForm;