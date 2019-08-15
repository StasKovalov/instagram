import React, {Component} from "react";
import style from "./index.module.scss";

import {connect} from "react-redux";
import ProfileInfo from "@molecules/Main/Sidebar/ProfileInfo";
import ItemBlock from "@molecules/Main/Sidebar/ItemBlock";

class Sidebar extends Component  {
    render() {
        const {authUser} = this.props;
        return (
            <div className={style.sidebar}>
                <ProfileInfo authUser={authUser} />
                <ItemBlock title='Истории' all='Смотреть все'  time="15 минут" /> 
                <ItemBlock title='Рекомендации для вас' all='Все' subscribe="Подписаться"/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authUser: state.authUser
    }
}

export default connect(mapStateToProps)(Sidebar);