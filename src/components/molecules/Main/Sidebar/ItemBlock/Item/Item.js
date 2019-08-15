import React from "react";
import style from "./index.module.scss";

import Avatar from "@atoms/Avatar";
import avatarImg from "../../../../../../assets/example-profile-img.jpg";

const Item = ({ username, time, subscribe }) => {
    return (
        <div className={style.item}>
            <Avatar
                StoryRecomend
                src={avatarImg}
            />
            <div className={style.action}>
                <span className={style.username}>dfdsfdsfs{username}</span>
                <span className={style.subscribe}>{subscribe}</span>
                <span className={style.time}>{time}</span>
            </div>
        </div>
    )
}

export default Item;