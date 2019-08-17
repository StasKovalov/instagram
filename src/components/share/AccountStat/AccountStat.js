import React from 'react';
import style from './index.module.scss';

import Text from '@common/Text';

const classNames = require('classnames');

const AccountStat = ({ counts = {}, desktop, tablet }) => {
    const styleAccountStat = classNames(style.accountStat, {
        [style.desktop]: desktop,
        [style.tablet]: tablet
    })

    const { media=0, follows=0, followed_by=0 } = counts;
    return (
        <div className={styleAccountStat}>
            <div className={style.publications}>
                <Text infoAccount bold>{media}</Text>
                <Text infoAccount>публикаций</Text>
            </div>
            <div className={style.followers}>
                <Text infoAccount bold>{follows}</Text>
                <Text infoAccount>подписчиков</Text>
            </div>
            <div className={style.subs}>
                <Text infoAccount>подписки:</Text>
                <Text infoAccount bold>{followed_by}</Text>
            </div>
        </div>
    )
}

export default AccountStat;