import React from "react";
import style from "./index.module.scss";

import Recomendation from "./Recomendation";

const Recomendations = props => {
    return (
        <div className={style.recomendations}>
            <div className={style.titlesBlock}>
                <span className={style.title1}>Рекомендации</span>
                <span className={style.title2}>Все</span>
            </div>
            <div className={style.recomendationsWrapper}>
                <Recomendation />
                <Recomendation />
                <Recomendation />
                <Recomendation />
            </div>
        </div>
    )
}

export default Recomendations;