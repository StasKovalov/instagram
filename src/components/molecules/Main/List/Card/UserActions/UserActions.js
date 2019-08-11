import React from "react";
import style from "./index.module.scss";

import Icon from "@atoms/Icon";

const UserActions = props => {
    return (
        <div className={style.userActions}>
            <div className={style.mainActions}>
                <Icon><span className={style.like}/></Icon>
                <Icon><span className={style.comments}/></Icon>
                <Icon><span className={style.share}/></Icon>
            </div>
            <Icon><span className={style.save} /></Icon>
        </div>
    )
}

export default UserActions;