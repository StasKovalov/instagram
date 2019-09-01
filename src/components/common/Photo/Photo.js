import React from "react";
import style from './index.module.scss';
import classNames from "classnames";

const Photo = ({ profilePhoto, fullPublication, children }) => {
    const stylePhoto = classNames({
        [style.profilePhoto]: profilePhoto,
        [style.fullPublication]: fullPublication
    })

    return (
        <div className={stylePhoto}>
            {children}
        </div>
    )
}

export default Photo;