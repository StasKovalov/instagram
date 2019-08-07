import React from "react";
import style from "./index.module.scss";

const classNames = require('classnames');

const Text = ({ children, links, userName, infoAccount, realName, aboutAccount, bold }) => {

    let textStyle = classNames(style.text, {
        [style.links]: links,
        [style.userName]: userName,
        [style.infoAccount]: infoAccount,
        [style.realName]: realName,
        [style.aboutAccount]: aboutAccount,
        [style.bold]: bold
    })

    return (
        <span className={textStyle}>{children}</span>
    )
}

export default Text;