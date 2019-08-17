import React from 'react';
import style from './index.module.scss';

import Avatar from '@common/Avatar';
import AccountSettings from './AccountSettings';
import AccountStat from '@share/AccountStat';

const AccountInfo = ({user}) => {
    const { counts, full_name, username, profile_picture, bio } = user;
    
    return (
        <div className={style.accountInfo}>
            <div className={style.avatarWrap}>
                <Avatar profilePage src={profile_picture} />
            </div>

            <div className={style.info}>
                <AccountSettings username={username}/>
                <AccountStat counts={counts} desktop/>
                <div className={style.accountAbout}>
                    <span className={style.realName}>{full_name}</span>
                    <span className={style.aboutAccount}>{bio}</span>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo;