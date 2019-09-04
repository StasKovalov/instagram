import React from "react";
import style from "./index.module.scss";

import Avatar from "@common/Avatar";

const Item = ({ username, time, subscribe, profile_picture}) => {
    return (
        <div className={style.item}>
            <Avatar
                storyRecomend
                src={profile_picture}
            />
            <div className={style.action}>
                <span className={style.username}>{username}</span>
                <span className={style.subscribe}>{subscribe}</span>
                <span className={style.time}>{time}</span>
            </div>
        </div>
    )
}

export default Item;