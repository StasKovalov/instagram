import React from 'react';
import style from './icon.module.scss';

const Icon = ({children}) => {
    return (
    <div className={style.icon}>
        {children}
    </div>
    )
}

export default Icon;