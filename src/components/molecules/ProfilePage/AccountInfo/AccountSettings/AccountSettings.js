import React from 'react';
import style from './index.module.scss';

import Text from '../../../../atoms/Text';
import Button from '../../../../atoms/Button';
import Icon from '../../../../atoms/Icon';


const AccountSettings = () => {
    return (
        <div className = {style.settings}>
            <Text userName>username</Text>
            <Button editProfile>Редактировать профиль</Button>
            <Icon sizeM><span className={style.settingsIcon}/></Icon>
        </div>
    )
}

export default AccountSettings;