import React from "react";
import style from "./index.module.scss";

import Photo from "@common/Photo";
import Icon from "@common/Icon";


const PhotoGallery = ({ publications }) => {

    return (
        <div className={style.accountPhotos}>
            {publications && publications.map((publication, index) => {
                const { counts: { likes, comments }, photoURL } = publication;
                if (index < 3) {
                    return <Photo key={publication.id} profilePhoto>
                        <div className={style.wrapperPhoto}>
                            <img alt="user Publication" className={style.img} src={photoURL} />

                            <div className={style.countsInfoWithoutTop}>
                                <div className={style.counts}>
                                    <div className={style.likeCounts}>
                                        <Icon><span className={style.likeHeartIcon} /></Icon>
                                        <span className={style.text}>{likes}</span>
                                    </div>

                                    <div className={style.commentCounts}>
                                        <Icon><span className={style.commentIcon} /></Icon>
                                        <span className={style.text}>{comments}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Photo>

                }
                return <Photo key={publication.id} profilePhoto>
                    <div className={style.wrapperPhoto}>
                        <img alt="user Publication" className={style.img} src={photoURL} />
                        <div className={style.countsInfo}>
                            <div className={style.counts}>
                                <div className={style.likeCounts}>
                                    <Icon><span className={style.likeHeartIcon} /></Icon>
                                    <span className={style.text}>{likes}</span>
                                </div>

                                <div className={style.commentCounts}>
                                    <Icon><span className={style.commentIcon} /></Icon>
                                    <span className={style.text}>{comments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Photo>
            })}
        </div>
    )
}

export default PhotoGallery;