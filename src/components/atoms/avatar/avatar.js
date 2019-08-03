import React from 'react';
import style from './avatar.module.scss';

const Avatar = props => {
    return (
        < div className = { style.avatarWrap } >
            <img className={style.avatarImg} />
        </div >
    )
}
export default Avatar;