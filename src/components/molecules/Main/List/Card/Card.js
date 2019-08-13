import React from "react";
import style from "./index.module.scss";

import {Link} from "react-router-dom";

import Avatar from "@atoms/Avatar";
import Icon from "@atoms/Icon";
import Photo from "../../../../atoms/Photo";
import UserActions from "./UserActions";
import UserComment from "./UserComment";

const Card = ({ image, username, profile_picture }) => (
  <div className={style.card}>

    <div className={style.userTitle}>
      <Link to={`/profile/${username}`}>
      <div data-username={username} className={style.user}>
          <Avatar List src={profile_picture} />
          <span className={style.username}>{username}</span>
      </div>
      </Link>
      <Icon><span className={style.icon}></span></Icon>
    </div>

    <Photo><img className={style.image} src={image} alt="error" /></Photo>

    <div className={style.other}>
      <UserActions />
      <div className={style.userRate}>
        <span className={style.rate}>54 000 отметок "Нравится"</span>
      </div>
      <UserComment />
    </div>
  </div>
);

export default Card;
