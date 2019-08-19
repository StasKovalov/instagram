import React from "react";
import style from "./index.module.scss";

import Photo from "@common/Photo";


const PhotoGallery = ({ publications }) => {

    return (
        <div className={style.accountPhoto}>
            {publications && publications.map((publication, idx) => {
                return <Photo key={idx} profilePhoto><img className={style.img} src={publication} /></Photo>
            })}
        </div>
    )
}

export default PhotoGallery;