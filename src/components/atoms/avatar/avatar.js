import React from "react";
import style from "./index.module.scss";

const classNames = require('classnames');

const Avatar = ({ profilePage, Sidebar, StoryRecomend, List, src}) => {
    const avatarStyle = classNames({
        [style.profile]: profilePage,
        [style.sidebar]: Sidebar,
        [style.storyRecomend]: StoryRecomend,
        [style.list]: List,
    })
    return (
        < div className={avatarStyle} >
            <img src = {src} className={style.avatarImg} alt = 'avatar-img'/>
        </div >
    )
}

export default Avatar;