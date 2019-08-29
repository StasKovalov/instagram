import React from "react";
import style from "./index.module.scss";

const UserComment = ({userComment = {}}) => {
    const { username, comment } = userComment;
    return (
        <div className={style.userComment}>
            <span className={style.username}>{username}</span> 
            {comment}
        </div>
    )
}

export default UserComment;