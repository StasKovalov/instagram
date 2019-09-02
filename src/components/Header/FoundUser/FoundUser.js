import React from "react";
import style from "./index.module.scss";

import Avatar from "@common/Avatar";

const FoundUser = ({profile_picture, username, full_name}) => {
    return (
       <div className={style.foundUser}>
           <div className={style.avatar}>
                <Avatar storyRecomend src={profile_picture}/>
           </div>
           <div className={style.dataInfo}>
                <p className={style.username}>{username}</p>
                <p className={style.fullName}>{full_name}</p>
           </div>
       </div>
    )
}

export default FoundUser;