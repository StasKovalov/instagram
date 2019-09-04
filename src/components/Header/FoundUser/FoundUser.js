import React from "react";
import style from "./index.module.scss";

import Avatar from "@common/Avatar";
import Icon from "@common/Icon";

const FoundUser = ({profile_picture, username, full_name, isAdmin}) => {
    return (
       <div className={style.foundUser}>
           <div className={style.avatar}>
                <Avatar storyRecomend src={profile_picture}/>
           </div>
           <div className={style.dataInfo}>
               <div className={style.usernameBlock}>
                   <p className={style.username}>{username}</p>
                    {
                        isAdmin &&
                        <div className={style.admin}>
                            <Icon><span className={style.adminIcon} /></Icon>
                        </div>
                    }
               </div>
                <p className={style.fullName}>{full_name}</p>
           </div>
       </div>
    )
}

export default FoundUser;