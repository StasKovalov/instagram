import React from 'react';
import style from './index.module.scss';

const classNames = require('classnames');

const Icon = ({ children, sizeS, sizeM, sizeL }) => {
    const styleIcon = classNames(style.icon, {
        [style.s]: sizeS,
        [style.m]: sizeM,
        [style.l]: sizeL
    })
    return (
        <div className={styleIcon}>
            {children}
        </div>
    )
};

export default Icon;