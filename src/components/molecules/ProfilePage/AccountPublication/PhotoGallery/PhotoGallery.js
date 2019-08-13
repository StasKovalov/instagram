import React from "react";
import style from "./index.module.scss";

import Photo from "@atoms/Photo";


const PhotoGallery = ({publications = []}) => {
    return (
        <div className={style.accountPhoto}>
            {publications.map(publication => <Photo profilePhoto><img className={style.img} src={publication}/></Photo>)}
        </div>
    )
}

export default PhotoGallery;