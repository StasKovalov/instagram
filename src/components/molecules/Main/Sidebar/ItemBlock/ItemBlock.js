import React from "react";
import style from "./index.module.scss";

import Item from "./Item";

const ItemBlock = ({ title, all, subscribe, time}) => {
    return (
        <div className={style.itemBlock}>
            <div className={style.titlesBlock}>
                <span className={style.title}>{title}</span>
                <span className={style.all}>{all}</span>
            </div>
            <div className={style.recomendationsWrapper}>
                <Item subscribe={subscribe} time={time}/>
                <Item subscribe={subscribe} time={time} />
                <Item subscribe={subscribe} time={time} />
            </div>
        </div>
    )
}

export default ItemBlock