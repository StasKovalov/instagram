import React from 'react';
import style from './index.module.scss';

import Text from '@common/Text';
import Icon from '@common/Icon';


const AccountSettings = ({username}) => {
    return (
        <div className = {style.settings}>
            <Text userName>{username}</Text>
            <div className={style.editItems}> 
                <button className={style.editProfile}>Редактировать профиль</button>
                <Icon><span className={style.settingsIcon} /></Icon>
            </div>
        </div>
    )
}

export default AccountSettings;