import React from "react";
import style from "./index.module.scss";

import Text from "@atoms/Text";

const UserRate = props => {
    return (
        <div className={style.userRate}>
            <span className={style.rate}>54 000 отметок "Нравится"</span>
        </div>
    )
}

export default UserRate;