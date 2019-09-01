import React from "react";
import style from "./index.module.scss";

import { Link } from "react-router-dom";

const UserComment = ({ userComment = {}, onHideModal}) => {
    const { username, comment } = userComment;
    return (
        <div className={style.userComment}>
            <Link
                onClick={onHideModal}
                className={style.link}
                to={{
                    pathname: `/user/${username}`,
                    state: { username: username }
                }}>
                {username}
            </Link>
            {comment}
        </div>
    )
}

export default UserComment;