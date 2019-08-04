import React from 'react';
import style from './profile-page.module.scss';

import Header from '../../organisms/profile-page/header';
import AccountInfo from '../../organisms/profile-page/account-info';

const ProfilePage = props => {
    return (
        <div className = {style.profilePage}>
            <Header />
            <main className = {style.main}>
        <AccountInfo/>
            </main>
        </div>
    )
}

export default ProfilePage;