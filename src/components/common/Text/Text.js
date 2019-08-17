import React from "react";
import style from "./index.module.scss";

const classNames = require('classnames');

const Text = ({ children, links, userName, infoAccount, bold }) => {
    let textStyle = classNames(style.text, {
        [style.links]: links,
        [style.userName]: userName,
        [style.infoAccount]: infoAccount,
        [style.bold]: bold
    })

    return (
        <span className={textStyle}>{children}</span>
    )
}

export default Text;