import React from 'react';
import style from './index.module.scss';

import Icon from "@atoms/Icon";
import Line from "@atoms/Line";
import InstagramImg from "@atoms/InstagramImg";

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