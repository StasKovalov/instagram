import React from "react";
import style from "./index.module.scss";

import Avatar from "@atoms/Avatar";
import avatarImg from "../../../../../../assets/example-profile-img.jpg"
import Icon from "@atoms/Icon";

const UserTitle = props => {
    return (
        <div className={style.userTitle}>
            <div className={style.user}>
                <Avatar List  src={avatarImg}/>
                <span className={style.username}>staskovalov</span>
            </div>
            <Icon><span className={style.icon}></span></Icon>
        </div>
    )
}

export default UserTitle;