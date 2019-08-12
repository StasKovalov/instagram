import React from 'react';
import style from './index.module.scss';

import AccountInfo from "@organisms/ProfilePage/AccountInfo";
import AccountPublication from "@organisms/ProfilePage/AccountPublication";

const ProfilePage = props => {
    return (
        <div className={style.inner}>
            <main className={style.main}>
                <div className={style.accountInfMargin}>
                    <AccountInfo />
                </div>
                <AccountPublication />
            </main>
        </div>
    )
}

export default ProfilePage;