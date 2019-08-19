import React, {Component} from "react";
import style from "./index.module.scss";

import ProfileInfo from "./ProfileInfo";
import ItemBlock from "./ItemBlock";

class Sidebar extends Component  {
    render() {
        const { authUser } = this.props;
        return (
            <div className={style.sidebar}>
                <ProfileInfo authUser={authUser} />
                <ItemBlock title='Истории' all='Смотреть все'  time="15 минут" /> 
                <ItemBlock title='Рекомендации для вас' all='Все' subscribe="Подписаться"/>
            </div>
        )
    }
}

export default Sidebar;