import React from "react";
import style from "./index.module.scss";

import Story from "./Story";

const Stories = props => {
    return (
        <div className={style.stories}>
            <div className={style.title}>
                <span className={style.history}>Истории</span>
                <span className={style.seeAll}>Смотреть все</span>
            </div>
            <div className={style.storiesWrapper}>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
            </div>
        </div>
    )
}

export default Stories;