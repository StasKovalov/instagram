import React, { Component } from "react";
import style from "./index.module.scss";
import PhotoModal from "./PhotoModal";

import Photo from "@common/Photo";
import Icon from "@common/Icon";

class PhotoGallery extends Component {
  state = {
    modalContent: null,
    isVisibleModal: false
  };
  onPressPublication = e => {
    document.body.style.overflow = "hidden";
    const { profile_picture, username } = this.props;
    const publication = this.props.publications.find(
      publication => publication.id === e.currentTarget.dataset.id
    );
    this.setState({
      modalContent: {
        username,
        profile_picture,
        publication
      },
      isVisibleModal: true
    });
  };
  onHideModal = () => {
    document.body.style.overflow = "";
    this.setState({
      modalContent: null,
      isVisibleModal: false
    });
  };
  render() {
    const { publications } = this.props;
    return (
      <div className={style.accountPhotos}>
        {this.state.isVisibleModal && (
          <PhotoModal
            {...this.state.modalContent}
            onHideModal={this.onHideModal}
          />
        )}
        {publications &&
          publications.map(publication => {
            const {
              counts: { likes, comments },
              photoURL
            } = publication;
            return (
              <Photo key={publication.id} profilePhoto>
                <div
                  className={style.wrapperPhoto}
                  data-id={publication.id}
                  onClick={this.onPressPublication}
                >
                  <img
                    alt="user Publication"
                    className={style.img}
                    src={photoURL}
                  />
                  <div className={style.countsInfo}>
                    <div className={style.counts}>
                      <div className={style.likeCounts}>
                        <Icon>
                          <span className={style.likeHeartIcon} />
                        </Icon>
                        <span className={style.text}>{likes}</span>
                      </div>

                      <div className={style.commentCounts}>
                        <Icon>
                          <span className={style.commentIcon} />
                        </Icon>
                        <span className={style.text}>{comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Photo>
            );
          })}
      </div>
    );
  }
}

export default PhotoGallery;
