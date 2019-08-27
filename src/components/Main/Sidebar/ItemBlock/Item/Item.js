import React from "react";
import style from "./index.module.scss";

import Avatar from "@common/Avatar";

const Item = ({ username, time, subscribe }) => {
    return (
        <div className={style.item}>
            <Avatar
                storyRecomend
                src={'https://picua.org/images/2019/08/19/8c53056911c201869b986346185f855c.jpg'}
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