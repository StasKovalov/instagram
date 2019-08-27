import React from "react";
import style from "./index.module.scss";

import {Link} from "react-router-dom";

import Avatar from "@common/Avatar";

const ProfileInfo = ({authUser}) => {
    return (
        <div className={style.profileInfo}>
            <Link className={style.link} to={`/${authUser}`}><Avatar sidebar src={'https://picua.org/images/2019/08/19/8c53056911c201869b986346185f855c.jpg'} /></Link>
            <div className={style.nicknames}>
                <Link className={style.link} to={`/${authUser}`}><span className={style.authUser}>{authUser}</span></Link>
            </div>
        </div>
    )
    }

export default ProfileInfo;