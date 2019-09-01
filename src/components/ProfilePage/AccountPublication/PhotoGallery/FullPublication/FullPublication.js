import React, { Component } from "react";
import style from "./index.module.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { likeCurrentUser, unlikeCurrentUser } from "@redux/actionCreators";
import classNames from "classnames";

import UserComment from "@share/UserComment";
import UserActions from "@share/UserActions";
import Photo from "@common/Photo";
import Icon from "@common/Icon";
import Avatar from "@common/Avatar";

class FullPublication extends Component {

  state = {
    clickLiked: false,
    doubleClickLiked: false,
  }

  componentDidMount() {
    this.updateLikeState();
  }

  updateLikeState = () => {
    const { publication: { isLiked } } = this.props;
    this.setState({ clickLiked: isLiked });
  }

  clickLike = () => {
    const { username, publication: { id }, likeCurrentUser, unlikeCurrentUser } = this.props;
    if (!this.state.clickLiked) {
      this.setState({ clickLiked: true })
      likeCurrentUser(username, id);
    } else {
      this.setState({ clickLiked: false })
      unlikeCurrentUser(username, id);
    }
  }

  doubleClickLike = () => {
    const { username, publication: { id }, likeCurrentUser } = this.props;
    if (!this.state.clickLiked) {
      this.setState({
        doubleClickLiked: true,
        clickLiked: true,
      })
      likeCurrentUser(username, id);
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
    const {
      username,
      profile_picture,
      publication: { comments, counts: { likes }, photoURL },
      onHideModal
    } = this.props;

    const { clickLiked, doubleClickLiked } = this.state;

    const animationHeartStyle = classNames(style.animationHeart, {
      [style.liked]: doubleClickLiked
    })

    return (
      <div className={style.wrapperPublication}>

          <div onDoubleClick={this.doubleClickLike} className={style.photoWrapper}>
            <Photo fullPublication>
              <div className={style.heartWrapper}>
                <Icon><span className={animationHeartStyle}></span></Icon>
              </div>

            <img className={style.img} src={photoURL} alt="error" />
            </Photo>
          </div>

        <div className={style.publicationInfo}>
          <div className={style.userTitle}>
            <Link
              className={style.link}
              to={{
                pathname: `/user/${username}`,
                state: { username: username }
              }}
            >
              <div className={style.user}>
                <Avatar list src={profile_picture} />
                <span className={style.username}>{username}</span>
              </div>
            </Link>
            <Icon>
              <span className={style.icon} />
            </Icon>
          </div>
          <div className={style.comments}>
            {comments &&
              comments.map((comment, index) => (
                <UserComment onHideModal={onHideModal}  key={index} userComment={comment} />
              ))}
          </div>
          <div className={style.actionsRate}>
            <div className={style.userActions}>
              <UserActions clickLike={this.clickLike} isLiked={clickLiked} />
            </div>
            <div className={style.userRate}>
              <span className={style.rate}>{likes} отметок "Нравится"</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  likeCurrentUser,
  unlikeCurrentUser
}

export default connect(null, mapDispatchToProps)(FullPublication);
