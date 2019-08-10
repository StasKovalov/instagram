import React from "react";
import style from "./index.module.scss";

import Avatar from "@atoms/Avatar";
import Text from "@atoms/Text";
import avatarImg from "../../../../../../assets/example-profile-img.jpg";

const Recomendation = props => {
    return(
        <div className={style.recomendation}>
                <Avatar
                    StoryRecomend
                    src={avatarImg}
                />
                <div className={style.action}>
                    <Text title>staskovalov</Text>
                    <span className={style.subscribe}>Подписаться</span>
                </div>
        </div>
    )
}

export default Recomendation;