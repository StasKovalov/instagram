import React from 'react';
import style from './index.module.scss';

import Text from '../../../../atoms/Text';

const classNames = require('classnames');

const AccountStat = ({ pub, followers, subs, desktop, tablet }) => {
    const styleAccountStat = classNames(style.accountStat, {
        [style.desktop]: desktop,
        [style.tablet]: tablet
    })
    return (
        <div className={styleAccountStat}>
            <div className={style.publications}>
                <Text infoAccount bold>5</Text>
                <Text infoAccount>публикаций</Text>
            </div>
            <div className={style.followers}>
                <Text infoAccount bold>1000</Text>
                <Text infoAccount>подписчиков</Text>
            </div>
            <div className={style.subs}>
                <Text infoAccount>подписки:</Text>
                <Text infoAccount bold>1</Text>
            </div>
        </div>
    )
}

export default AccountStat;