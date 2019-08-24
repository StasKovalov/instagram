import React from "react";
import style from "./index.module.scss";
import classNames from "classnames";

import Icon from "@common/Icon";

const UserActions = ({ isLiked, clickLike}) => {
    const styleLike = classNames(style.like, {
        [style.liked]: isLiked,
        [style.dontLiked]: !isLiked,
    })
    return (
        <div className={style.userActions}>
            <div className={style.mainActions}>
                <Icon><span onClick={clickLike} className={styleLike}/></Icon>
                <Icon><span className={style.comments}/></Icon>
                <Icon><span className={style.share}/></Icon>
            </div>
            <Icon><span className={style.save} /></Icon>
        </div>
    )
}

export default UserActions;