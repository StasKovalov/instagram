import React from 'react';
import style from './index.module.scss';

import Text from '../../../../atoms/Text';

const AccountAbout = props => {
    return (
        <div className = {style.accountAbout}>
            <Text realName bold>realName</Text>
            <Text aboutAccount>about me</Text>
        </div>
    )
}

export default AccountAbout;