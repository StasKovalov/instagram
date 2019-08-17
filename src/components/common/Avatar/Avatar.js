import React from "react";
import style from "./index.module.scss";
import classNames from "classnames";

const Avatar = ({ profilePage, sidebar, storyRecomend, list, src}) => {
    const avatarStyle = classNames({
        [style.profile]: profilePage,
        [style.sidebar]: sidebar,
        [style.storyRecomend]: storyRecomend,
        [style.list]: list,
    })
    return (
        < div className={avatarStyle} >
            <img src = {src} className={style.avatarImg} alt = 'avatar-img'/>
        </div >
    )
}

export default Avatar;
