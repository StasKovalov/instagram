import React from "react";
import style from "./index.module.scss";

const classNames = require('classnames');

console.log(123)

const Text = ({ children, links, userName, infoAccount, realName, aboutAccount, title, subtitle, bold }) => {
    let textStyle = classNames(style.text, {
        [style.links]: links,
        [style.userName]: userName,
        [style.infoAccount]: infoAccount,
        [style.title]: title,
        [style.subtitle]: subtitle,
        [style.bold]: bold
    })

    return (
        <span className={textStyle}>{children}</span>
    )
}

export default Text;