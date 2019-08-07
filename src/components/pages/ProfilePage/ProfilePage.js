import React from 'react';
import style from './index.module.scss';

import Header from '../../organisms/ProfilePage/Header';
import AccountInfo from '../../organisms/ProfilePage/AccountInfo';
import AccountPublication from '../../organisms/ProfilePage/AccountPublication';
import Footer from '../../organisms/LoginPage/Footer';

const ProfilePage = props => {
    return (
        <section className = {style.profilePage}>
            <div className={style.inner}>
            <Header />
            <main className = {style.main}>
                    <AccountInfo />
                    <AccountPublication/>
            </main>
                <Footer />
            </div>
        </section>
    )
}

export default ProfilePage;