import React from 'react';
import style from './instagram-img.module.scss';
import Instagram from '../../../assets/instagram.png';

const classNames = require('classnames');

const InstagramImg = ({loginPage, profilePage}) => {
    let instagramTitleWrap = classNames({
        [style.loginPage]: loginPage,
        [style.profilePage]: profilePage
    })
    
    return (
        <div className={instagramTitleWrap}>
            <img className={style.instagramImg} src={Instagram} />
        </div>
    )
}

export default InstagramImg;