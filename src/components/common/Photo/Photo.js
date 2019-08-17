import React from "react";
import style from './index.module.scss';

const Photo = ({ profilePhoto,  children }) => {
    return (
        <div className={style.profilePhoto}>
            {children}
        </div>
    )
}

export default Photo;