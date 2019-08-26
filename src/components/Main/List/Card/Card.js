import React, { Component } from "react";
import style from "./index.module.scss";

import classNames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { likeCurrentUser, unlikeCurrentUser } from '@redux/actionCreators';

import Avatar from "@common/Avatar";
import Icon from "@common/Icon";
import Photo from "@common/Photo";
import UserActions from "./UserActions";
import UserComment from "./UserComment";

class Card extends Component {

  state = {
    clickLiked: false,
    doubleClickLiked: false,
    comments: null
  }

  componentDidMount() {
    const { comments } = this.props;
    this.setState({comments});
  }

  clickLike = () => {
    const { username, imageId, likeCurrentUser, unlikeCurrentUser } = this.props;
    if (!this.state.clickLiked) {
      this.setState((prevState) => ({
        clickLiked: true,
      }))
      likeCurrentUser(username, imageId)
    } else {
      this.setState((prevState) => ({
        clickLiked: false,
        likes: prevState.likes - 1
      }))
      unlikeCurrentUser(username, imageId)
    }
  }

  doubleClickLike = () => {
    if(!this.state.clickLiked) {
      this.setState((prevState) => ({
        doubleClickLiked: true,
        clickLiked: true,
        likes: prevState.likes +1
      }))
      setTimeout(() => {
        this.setState((prevState) => ({
          doubleClickLiked: false
        }))
      }, 1000);
    } else {
      this.setState((prevState) => ({
        doubleClickLiked: true,
        clickLiked: true
      }))
      setTimeout(() => {
        this.setState((prevState) => ({
          doubleClickLiked: false
        }))
      }, 1000);
    }
  }

  render() {
    const { profile_picture, username, image, likes, likedUsers } = this.props;
    console.log(likedUsers);
    const { clickLiked, doubleClickLiked, comments} = this.state;
    const animationHeartStyle = classNames(style.animationHeart, {
      [style.liked]: doubleClickLiked
    })
    return (
      <div className={style.card}>
        <div className={style.userTitle}>
          <Link className={style.link} to={{
            pathname: `/user/${username}`,
            state: { username: username }
          }}>
            <div className={style.user}>
              <Avatar list src={profile_picture} />
              <span className={style.username}>{username}</span>
            </div>
          </Link>
          <Icon>
            <span className={style.icon} />
          </Icon>
        </div>

        <div onDoubleClick={this.doubleClickLike} className={style.photoWrapper}>
                <Photo>
                  <div className={style.heartWrapper}>
              <Icon><span className={animationHeartStyle}></span></Icon>
                  </div>

                  <img className={style.image} src={image} alt="error" />
                </Photo>
      </div>

        <div className={style.other}>
          <UserActions clickLike={this.clickLike} isLiked={clickLiked}/>
          <div className={style.userRate}>
            <span className={style.rate}>{likes} отметок "Нравится"</span>
          </div>
          {comments && comments.map(comment => <UserComment userComment={comment}/>)}
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ currentUser}) => ({
  likedUsers: currentUser.likedUsers,
})


const mapDispatchToProps = {
  likeCurrentUser,
  unlikeCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
