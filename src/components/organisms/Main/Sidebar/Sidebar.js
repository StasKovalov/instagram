import React from "react";
import style from "./index.module.scss";

import ProfileInfo from "@molecules/Main/Sidebar/ProfileInfo";
import Stories from "@molecules/Main/Sidebar/Stories";
import Recomendations from "@molecules/Main/Sidebar/Recomendations"

const Sidebar = (props) => {
    return (
        <div className={style.sidebar}>
            <ProfileInfo/>
            <Stories/>
            <Recomendations/>
        </div>
    )
}

export default Sidebar;