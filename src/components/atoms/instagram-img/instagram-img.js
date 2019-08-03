import React from 'react';
import style from './instagram-img.module.scss';
import Instagram from '../../../assets/instagram.png';

let classNames = require('classnames');

const InstagramImg = ({loginPage}) => {
    let instagramImg = classNames(style.instagramImg, {
        [style.loginPage]: loginPage
    })
    
    return (
        <div className={style.instagramTitleWrap}>
            <img className={instagramImg} src={Instagram} />
        </div>
    )
}

export default InstagramImg;