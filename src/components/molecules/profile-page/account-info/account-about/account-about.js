import React from 'react';
import style from './account-about.module.scss';

import Text from '../../../../atoms/text';

const AccountAbout = props => {
    return (
        <div className = {style.accountAbout}>
            <Text>realName</Text>
            <Text>about me</Text>
        </div>
    )
}

export default AccountAbout;