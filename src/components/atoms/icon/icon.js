import React from 'react';
import style from 'icon.module.scss';

const Icon = ({childrern}) => {
    return (
    <div className={style.icon}>
        {childrern}
    </div>
    )
}

export default Icon;