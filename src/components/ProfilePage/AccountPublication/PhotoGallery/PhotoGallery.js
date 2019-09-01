import React, { Component } from "react";
import style from "./index.module.scss";

import Modal from "@components/Modal";
import FullPublication from "./FullPublication";
import Card from "@components/Main/List/Card";

import Photo from "@common/Photo";
import Icon from "@common/Icon";

const tablet = window.innerWidth <= 700;

class PhotoGallery extends Component {
  state = {
    modalContent: null,
    isVisibleModal: false,
    tablet: false
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
          <Modal  
            onHideModal={this.onHideModal}>
            {tablet ? <Card 
            onHideModal={this.onHideModal} 
            fullPublication {...this.state.modalContent}/> 
            : 
            <FullPublication onHideModal={this.onHideModal} {...this.state.modalContent} />}
          </Modal>
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
