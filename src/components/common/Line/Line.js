import React from 'react';
import style from './index.module.scss';
import classNames from "classnames";

const Line = ({vertical, horizontal, loginPage, header}) => {

    const lineStyle = classNames({
        [style.loginPage]: loginPage,
        [style.vertical]: vertical,
        [style.horizontal]: horizontal,
        [style.header]: header,
    })

    return (
        <div className={lineStyle} />
    )
}

export default Line;
