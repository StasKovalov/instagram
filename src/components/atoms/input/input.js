import React from "react";
import style from "./index.module.scss";

const classNames = require('classnames');

const Input = ({ profilePage, searchInput, ...props }) => {
    const styleInput = classNames(style.input,{
        [style.searchInput]: searchInput
    });
    return <input className={styleInput} {...props} />
}

export default Input;
