import React, { Component } from "react";
import style from "./index.module.scss";

import { Link } from "react-router-dom";

import Avatar from "@common/Avatar";
import Icon from "@common/Icon";
import Photo from "@common/Photo";
import UserActions from "./UserActions";
import UserComment from "./UserComment";

class Card extends Component {

  render() {
    const { profile_picture, username, image, likes, comments} = this.props;
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

        <Photo>
          <img className={style.image} src={image} alt="error" />
        </Photo>

        <div className={style.other}>
          <UserActions />
          <div className={style.userRate}>
            <span className={style.rate}>{`${likes}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} отметок "Нравится"</span>
          </div>
          {comments && comments.map(comment => <UserComment userComment={comment}/>)}
        </div>
      </div>
    );
  }
};

export default Card;
