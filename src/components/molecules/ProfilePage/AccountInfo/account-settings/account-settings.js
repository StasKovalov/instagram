import React from 'react';
import style from './account-settings.module.scss';

import Text from '../../../../atoms/text';
import Button from '../../../../atoms/button';
import Icon from '../../../../atoms/icon';
import { DiAptana } from "react-icons/di";

const AccountSettings = () => {
    return (
        <div className = {style.settings}>
            <Text>username</Text>
            <Button>Редактировать профиль</Button>
            <Icon><DiAptana/></Icon>
        </div>
    )
}

export default AccountSettings;