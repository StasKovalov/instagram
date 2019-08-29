import React from 'react';
import style from './index.module.scss';
import Instagram from '../../../assets/instagram.png';

const classNames = require('classnames');

const InstagramImg = ({loginPage, profilePage}) => {
    let instagramTitleWrap = classNames({
        [style.loginPage]: loginPage,
        [style.profilePage]: profilePage
    })
    
    return (
        <div className={instagramTitleWrap}>
            <img alt="Instagram Logo" className={style.instagramImg} src={Instagram} />
        </div>
    )
}

export default InstagramImg;