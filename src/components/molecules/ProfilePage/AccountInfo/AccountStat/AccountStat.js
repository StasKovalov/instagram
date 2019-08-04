import React from 'react';
import style from './index.module.scss';

import Text from '../../../../atoms/Text';

const AccountStat = ({ pub, followers, subs }) => {
    return (
        <div className={style.statisticsWrap}>
            <div className={style.publications}>
                <Text>5</Text>
                <Text>публикаций</Text>
            </div>
            <div className={style.followers}>
                <Text>222</Text>
                <Text>подписчиков</Text>
            </div>
            <div className={style.subs}>
                <Text>1000</Text>
                <Text>подписок</Text>
            </div>
        </div>
    )
}

export default AccountStat;