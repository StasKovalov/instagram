import React from 'react';
import style from './index.module.scss';

import Text from '../../../../atoms/Text';
import Button from '../../../../atoms/Button';
import Icon from '../../../../atoms/Icon';


const AccountSettings = () => {
    return (
        <div className = {style.settings}>
            <Text userName>username</Text>
            <div className={style.editItems}> 
                <Button editProfile>Редактировать профиль</Button>
                <Icon><span className={style.settingsIcon} /></Icon>
            </div>
        </div>
    )
}

export default AccountSettings;