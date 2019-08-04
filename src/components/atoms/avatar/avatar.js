import React from 'react';
import style from './avatar.module.scss';

const classNames = require('classnames');

const Avatar = ({profilePage, mainPage}) => {
    let avatarStyle = classNames({
        [style.profile]: profilePage,
        [style.main]: mainPage,
    })
    return (
        < div className={avatarStyle} >
            <img className={style.avatarImg} />
        </div >
    )
}
export default Avatar;