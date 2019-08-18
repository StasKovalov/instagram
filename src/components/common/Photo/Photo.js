import React from "react";
import style from './index.module.scss';
import classNames from "classnames";

const Photo = ({ profilePhoto,  children }) => {
    const stylePhoto = classNames({
        [style.profilePhoto]: profilePhoto
    })

    return (
        <div className={stylePhoto}>
            {children}
        </div>
    )
}

export default Photo;