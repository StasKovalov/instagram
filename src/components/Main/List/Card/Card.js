import React, { Component } from "react";
import style from "./index.module.scss";

import classNames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { likeCurrentUser, unlikeCurrentUser } from '@redux/actionCreators';

import Avatar from "@common/Avatar";
import Icon from "@common/Icon";
import Photo from "@common/Photo";
import UserActions from "@share/UserActions";
import UserComment from "@share/UserComment";

class Card extends Component {

  state = {
    clickLiked: false,
    doubleClickLiked: false,
  }

  componentDidMount() {
    this.updateLikeState();
  }

  updateLikeState = () => {
    const { isLiked } = this.props;
    this.setState({ clickLiked: isLiked });
  }

  clickLike = () => {
    const { username, imageId, likeCurrentUser, unlikeCurrentUser } = this.props;
    if (!this.state.clickLiked) {
      this.setState({ clickLiked: true })
      likeCurrentUser(username, imageId);
    } else {
      this.setState({ clickLiked: false})
      unlikeCurrentUser(username, imageId);
    }
  }

  doubleClickLike = () => {
    const { username, imageId, likeCurrentUser } = this.props;
    if (!this.state.clickLiked) {
      this.setState({
        doubleClickLiked: true,
        clickLiked: true,
      })
      likeCurrentUser(username, imageId);
      setTimeout(() => {
        this.setState({ doubleClickLiked: false })
      }, 1000);
    } else {
      this.setState({ doubleClickLiked: true })
      setTimeout(() => {
        this.setState({ doubleClickLiked: false })
      }, 1000);
    }
  }

  render() {
    const { profile_picture, username, image, likes, comments } = this.props;
    const { clickLiked, doubleClickLiked } = this.state;
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
          <UserActions clickLike={this.clickLike} isLiked={clickLiked} />
          <div className={style.userRate}>
            <span className={style.rate}>{likes} отметок "Нравится"</span>
          </div>
          {comments && comments.map((comment, indx) => <UserComment key={indx} userComment={comment} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({
  likedUsers: currentUser.likedUsers,
})


const mapDispatchToProps = {
  likeCurrentUser,
  unlikeCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
