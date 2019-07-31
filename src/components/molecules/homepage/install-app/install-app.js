import React from 'react';
import './install-app.scss';
import INST_IOS from '../../../../assets/install-app-ios.png';
import INST_ANDR from '../../../../assets/install-app-andr.png'


const InstallApp = props => {
    return (
        <div className='install-app-wrapper'>
            <span>Установите приложение</span>
            <div className='install-img'>
                <img src={INST_IOS}/>
                <img src={INST_ANDR} />
            </div>
        </div>
    )
}

export default InstallApp;
