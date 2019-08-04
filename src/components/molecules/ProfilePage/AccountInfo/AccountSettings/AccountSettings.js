import React from 'react';
import style from './index.module.scss';

import Text from '../../../../atoms/Text';
import Button from '../../../../atoms/Button';
import Icon from '../../../../atoms/Icon';
import { DiAptana } from "react-icons/di";

const AccountSettings = () => {
    return (
        <div className = {style.settings}>
            <Text userName>username</Text>
            <Button editProfile>Редактировать профиль</Button>
            <Icon><DiAptana size='2em'/></Icon>
        </div>
    )
}

export default AccountSettings;