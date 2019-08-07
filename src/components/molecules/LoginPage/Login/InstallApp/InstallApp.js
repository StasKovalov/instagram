<<<<<<< HEAD:src/components/molecules/LoginPage/Login/InstallApp/InstallApp.js
import React from 'react';
import style from './index.module.scss';

import INST_IOS from '../../../../../assets/install-app-ios.png';
import INST_ANDR from '../../../../../assets/install-app-andr.png';
=======
import React from "react";
import style from "./install-app.module.scss";
>>>>>>> master:src/components/molecules/homepage/install-app/install-app.js

import INST_IOS from "@assets/install-app-ios.png";
import INST_ANDR from "@assets/install-app-andr.png";

const InstallApp = props => {
<<<<<<< HEAD:src/components/molecules/LoginPage/Login/InstallApp/InstallApp.js
    return (
        <div className={style.installAppWrapper}>
            <span>Установите приложение</span>
            <div className={style.installImg}>
                <img alt='ios-download' src={INST_IOS}/>
                <img alt='andr-download' src={INST_ANDR}/>
            </div>
        </div>
    )
}
=======
  return (
    <div className={style.installAppWrapper}>
      <span>Установите приложение</span>
      <div className={style.installImg}>
        <img src={INST_IOS} />
        <img src={INST_ANDR} />
      </div>
    </div>
  );
};
>>>>>>> master:src/components/molecules/homepage/install-app/install-app.js

export default InstallApp;
