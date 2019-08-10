import React from "react";
import style from "./index.module.scss";

import Recomendation from './Recomendations';

const Recomendations = props => {
    return (
        <div className={style.recomendations}>
            <div className={style.title}>
                <span className={style.recomendation}>Рекомендации</span>
                <span className={style.seeAll}>Все</span>
            </div>
            <div className={style.recomendationWrapper}>
                <Recomendation />
                <Recomendation />
                <Recomendation />
                <Recomendation />
                <Recomendation />
                <Recomendation />
                <Recomendation />
                <Recomendation />
            </div>
        </div>
    )
}

export default Recomendations;