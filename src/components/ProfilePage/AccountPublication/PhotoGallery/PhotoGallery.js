import React from "react";
import style from "./index.module.scss";

import Photo from "@common/Photo";


const PhotoGallery = ({ publications = [] }) => {

    return (
        <div className={style.accountPhoto}>
            {publications.map((publication, idx) => {
                const index = publication.indexOf('jpg');
                const arrayStr = publication.split('');
                arrayStr.splice(index, 0, 'th.')
                const imageSizeS = arrayStr.join('');
                return <Photo key={idx} profilePhoto><img className={style.img} src={imageSizeS} /></Photo>
            })}
        </div>
    )
}

export default PhotoGallery;