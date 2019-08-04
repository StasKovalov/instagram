import React from 'react';
import style from './index.module.scss';

import Text from '../../../../atoms/Text';

const AccountStat = ({ pub, followers, subs }) => {
    return (
        <div className={style.statisticsWrap}>
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