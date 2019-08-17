import React from "react";
import style from "./index.module.scss";

import {Link} from "react-router-dom";

import avatarImg from "@assets/example-profile-img.jpg";
import Avatar from "@common/Avatar";

const ProfileInfo = ({authUser}) => {
    return (
        <div className={style.profileInfo}>
            <Link className={style.link} to={`/${authUser}`}><Avatar Sidebar src={avatarImg} /></Link>
            <div className={style.nicknames}>
                <Link className={style.link} to={`/${authUser}`}><span className={style.authUser}>{authUser}</span></Link>
            </div>
        </div>
    )
    }

export default ProfileInfo;