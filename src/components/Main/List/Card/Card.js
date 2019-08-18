import React from "react";
import style from "./index.module.scss";

import { Link } from "react-router-dom";

import Avatar from "@common/Avatar";
import Icon from "@common/Icon";
import Photo from "@common/Photo";
import UserActions from "./UserActions";
import UserComment from "./UserComment";

const Card = ({ image, username, profile_picture }) => {
  return (
    <div className={style.card}>
      <div className={style.userTitle}>
        <Link className={style.link} to={`/${username}`}>
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
          <span className={style.rate}>54 000 отметок "Нравится"</span>
        </div>
        <UserComment />
      </div>
    </div>
  );
};

export default Card;
