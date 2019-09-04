import React from 'react';
import style from './index.module.scss';

import Text from '@common/Text';
import Icon from '@common/Icon';


const AccountSettings = ({ username, authUser, isAdmin}) => {
    return (
        <div className = {style.settings}>
            <div className={style.text}>
                <div className={style.username}>
                    <Text userName>{username}</Text>
                </div>
                {
                    isAdmin && 
                    <div className={style.admin}>
                        <Icon><span className={style.adminIcon} /></Icon>
                    </div>
                }
            </div>
            {
                authUser === username && 
                (<div className={style.editItems}>
                    <button className={style.editProfile}>Редактировать профиль</button>
                    <Icon><span className={style.settingsIcon} /></Icon>
                </div>)
            }
        </div>
    )
}

export default AccountSettings;