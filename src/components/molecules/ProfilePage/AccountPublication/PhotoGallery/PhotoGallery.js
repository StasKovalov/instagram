import React from "react";
import style from "./index.module.scss";

import Photo from "../../../../atoms/Photo";


const PhotoGallery = props => {
    return (
        <div className={style.accountPhoto}>
            <Photo><img className={style.img} src={require('../../../../../assets/AccountPhoto/1.jpg')}/></Photo>
            <Photo><img className={style.img} src={require('../../../../../assets/AccountPhoto/1.jpg')} /></Photo>
            <Photo><img className={style.img} src={require('../../../../../assets/AccountPhoto/1.jpg')} /></Photo>
            <Photo><img className={style.img} src={require('../../../../../assets/AccountPhoto/1.jpg')} /></Photo>
            <Photo><img className={style.img} src={require('../../../../../assets/AccountPhoto/1.jpg')} /></Photo>
            <Photo><img className={style.img} src={require('../../../../../assets/AccountPhoto/1.jpg')} /></Photo>
        </div>
    )
}

export default PhotoGallery;