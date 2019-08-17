import React from 'react';
import style from './index.module.scss';

import Icon from "@common/Icon";
import Line from "@common/Line";
import InstagramImg from "@common/InstagramImg";

const classNames = require('classnames');

const InstagramLogo = ({ scrolled }) => {
    const styleElements = classNames(style.elements, {
        [style.scrolled]: scrolled
    })
    return (
        <div className={style.instagramLogo}>
            <Icon><span className={style.instagramIcon} /></Icon>
            <div className={styleElements}>
                <Line vertical header />
                <InstagramImg profilePage />
            </div>
        </div>
    )
}

export default InstagramLogo;