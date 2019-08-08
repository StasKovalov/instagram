import React from "react";
import style from "./index.module.scss";

const classNames = require('classnames');

const Button = ({ children, editProfile}) => {
    const buttonStyle = classNames({
        [style.editProfile]: editProfile,
    })
    return (
        <button className={buttonStyle}>{children}</button>
    )
}

export default Button;
