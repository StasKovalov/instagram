import React from "react";
import style from "./index.module.scss";

import Photo from "@common/Photo";


const PhotoGallery = ({ publications }) => {

    return (
        <div className={style.accountPhotos}>
            {publications && publications.map((publication) => {
                return <Photo key={publication.id} profilePhoto>
                    <img className={style.img} src={publication.photoURL} />
                    <div className={style.countsInfo}>

                    </div>
                    </Photo>
            })}
        </div>
    )
}

export default PhotoGallery;