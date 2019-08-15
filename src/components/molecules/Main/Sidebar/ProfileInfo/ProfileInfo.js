import React from "react";
import style from "./index.module.scss";

import {connect} from "react-redux";

import avatarImg from "../../../../../assets/example-profile-img.jpg";
import Avatar from "@atoms/Avatar";

const ProfileInfo = ({authUser}) => {
    return (
        <div className={style.profileInfo}>
            <Avatar
                Sidebar
                src={avatarImg} 
                />
            <div className={style.nicknames}>
                <span className={style.authUser}>{authUser}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authUser: state.authUser
    }
}

export default connect(mapStateToProps)(ProfileInfo);