import React from "react";
import style from "./index.module.css";

const Card = ({ title, description, image }) => (
  <div className={style.card}>
    <img className={style.image} src={image} alt="error" />
    <p className={style.title}>{title}</p>
    <p className={style.description}>{description}</p>
  </div>
);

export default Card;
