import React from 'react';
import style from './index.module.scss';

import INST_IOS from '../../../../../assets/install-app-ios.png';
import INST_ANDR from '../../../../../assets/install-app-andr.png';


const InstallApp = props => {
    return (
        <div className={style.installAppWrapper}>
            <span>Установите приложение</span>
            <div className={style.installImg}>
                <img src={INST_IOS}/>
                <img src={INST_ANDR} />
            </div>
        </div>
    )
}

export default InstallApp;
