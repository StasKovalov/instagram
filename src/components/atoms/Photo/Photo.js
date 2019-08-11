import React from "react";
import style from './index.module.scss';

const classNames = require('classnames');

const Photo = ({ profilePhoto, mainPhoto,  children }) => {
    const photoStyle = classNames({
        [style.profilePhoto]: profilePhoto,
        [style.mainPhoto]: mainPhoto,
    })
    return (
        <div className={photoStyle}>
            {children}
        </div>
    )
}

export default Photo;