import React from 'react';
import style from './index.module.scss';

const classNames = require('classnames');

const Avatar = ({profilePage, mainPage, src}) => {
    let avatarStyle = classNames({
        [style.profile]: profilePage,
        [style.main]: mainPage,
    })
    return (
        < div className={avatarStyle} >
            <img src = {src} className={style.avatarImg} alt = 'avatar-img'/>
        </div >
    )
}

export default Avatar;