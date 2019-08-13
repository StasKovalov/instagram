import React from 'react';
import style from './index.module.scss';

import Avatar from '../../../atoms/Avatar';
import AccountSettings from '../../../molecules/ProfilePage/AccountInfo/AccountSettings';
import AccountStat from '../../../molecules/ProfilePage/AccountInfo/AccountStat';
import ExampleIMG from '../../../../assets/example-profile-img.jpg';

const AccountInfo = ({user}) => {
    const { counts, full_name, username, profile_picture, bio } = user;
    console.log(counts);
    
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