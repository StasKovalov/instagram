import React from "react";
import style from './index.module.scss';

const Photo = ({ children }) => {
    return (
        <div className={style.photo}>
            {children}
        </div>
    )
}

export default Photo;