import React, {Component} from "react";
import style from "./index.module.scss";

import ProfileInfo from "@molecules/Main/Sidebar/ProfileInfo";
import ItemBlock from "@molecules/Main/Sidebar/ItemBlock";

class Sidebar extends Component  {
    render() {
        return (
            <div className={style.sidebar}>
                <ProfileInfo />
                <ItemBlock title='Истории' all='Смотреть все'  time="15 минут" /> 
                <ItemBlock title='Рекомендации для вас' all='Все' subscribe="Подписаться"/>
            </div>
        )
    }
}

export default Sidebar;