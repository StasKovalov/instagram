import React from 'react';
import style from './account-info.module.scss';

import Avatar from '../../../atoms/avatar';
import AccountAbout from '../../../molecules/profile-page/account-info/account-about';
import AccountSettings from '../../../molecules/profile-page/account-info/account-settings';
import AccountStat from '../../../molecules/profile-page/account-info/account-stat';

const AccountInfo = props => {
    return (
        <div className={style.accountInfo}>
            <div className={style.avatarWrap}>
                <Avatar />
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