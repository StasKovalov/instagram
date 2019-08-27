import React from "react";
import style from "./index.module.scss";

import Photo from "@common/Photo";


const PhotoGallery = ({ publications }) => {

    return (
        <div className={style.accountPhoto}>
            {publications && publications.map((publication) => {
                return <Photo key={publication.id} profilePhoto><img className={style.img} src={publication.photoURL} /></Photo>
            })}
        </div>
    )
}

export default PhotoGallery;