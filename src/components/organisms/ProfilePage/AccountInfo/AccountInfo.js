import React from 'react';
import style from './index.module.scss';

import Avatar from '../../../atoms/Avatar';
import AccountAbout from '../../../molecules/ProfilePage/AccountInfo/AccountAbout';
import AccountSettings from '../../../molecules/ProfilePage/AccountInfo/AccountSettings';
import AccountStat from '../../../molecules/ProfilePage/AccountInfo/AccountStat';
import ExampleIMG from '../../../../assets/example-profile-img.jpg';

const AccountInfo = props => {
    console.log(ExampleIMG);
    return (
        <div className={style.accountInfo}>
            <div className={style.avatarWrap}>
                <Avatar profilePage src={ExampleIMG} />
            </div>

            <div className={style.info}>
                <AccountSettings />
                <AccountStat />
                <AccountAbout />
            </div>
        </div>
    )
}

export default AccountInfo;