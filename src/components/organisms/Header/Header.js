import React from "react";
import style from "./index.module.scss";

import InstagramLogo from "@molecules/Header/InstagramLogo";
import Input from "@atoms/Input";
import IconSections from "@molecules/Header/IconSections";

const Header = () => {
    return (
        <div className = {style.header}>
            <div className = {style.items}>
                <InstagramLogo />
                <Input searchInput placeholder='Поиск' />
                <IconSections />
            </div>
        </div>
    )
}

export default Header;