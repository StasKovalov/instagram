import React from 'react';
import style from './login-page.module.scss';

import Login from '../../organisms/homepage/login';
import Footer from '../../organisms/homepage/footer';
import IphonePic from '../../../assets/iphone-img.png'



const LoginPage = props => {
    return (
        <section className={style.loginPage}>
            <div className={style.inner}>
                <main className={style.mainContent}>
                    <div className={style.iphoneImg}>
                        <img alt = 'iphone-img' src={IphonePic}/>
                    </div>
                    <Login />
                </main>
                <Footer />
            </div>
        </section>
    )
}

export default LoginPage;