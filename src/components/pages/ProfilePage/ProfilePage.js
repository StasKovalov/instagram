import React from 'react';
import style from './index.module.scss';

import Header from '../../organisms/ProfilePage/Header';
import AccountInfo from '../../organisms/ProfilePage/AccountInfo';

const ProfilePage = props => {
    return (
        <div className = {style.profilePage}>
            <Header />
            <main className = {style.main}>
                <div className = {style.inner}>
                    <AccountInfo />
                </div>
            </main>
        </div>
    )
}

export default ProfilePage;