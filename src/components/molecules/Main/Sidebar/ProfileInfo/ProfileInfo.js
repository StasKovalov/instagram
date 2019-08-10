import React from 'react';
import style from './index.module.scss';

import avatarImg from '../../../../../assets/example-profile-img.jpg';
import Avatar from '@atoms/Avatar';
import Text from '@atoms/Text';

const ProfileInfo = (props) => {
    return (
        <div className={style.profileInfo}>
            <Avatar
                Sidebar
                src={avatarImg} 
                />
            <div className={style.nicknames}>
                <Text title>staskovalov</Text>
                <Text subtitle>Stas Kovalov</Text>
            </div>
        </div>
    )
}

export default ProfileInfo;