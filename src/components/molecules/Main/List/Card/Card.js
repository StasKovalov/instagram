import React from "react";
import style from "./index.module.scss";

import UserTitle from "./UserTitle";
import Photo from "../../../../atoms/Photo";
import UserActions from "./UserActions";
import UserRate from "./UserRate";
import UserComment from "./UserComment";

const Card = ({ title, description, image }) => (
  <div className={style.card}>
    <UserTitle/>
    <Photo><img className={style.image} src={image} alt="error" /></Photo>
  <div className={style.other}>
      <UserActions />
      <UserRate />
      <UserComment/>
  </div>
  </div>
);

export default Card;
