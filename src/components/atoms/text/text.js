import React from 'react';
import style from './text.module.scss';

const classNames = require('classnames');

const Text = ({ children, links, userName, infoAccount, realName, aboutAccount }) => {

    let textStyle = classNames({
        [style.links]: links,
        [style.userName]: userName,
        [style.infoAccount]: infoAccount,
        [style.realName]: realName,
        [style.aboutAccount]: aboutAccount
    })

    return (
        <span className={textStyle}>{children}</span>
    )
}

export default Text;