import React from "react";
import Skeleton from "react-loading-skeleton";
import style from "./index.module.css";

export const CardSkeleton = () => (
  <div className={style.card}>
    <Skeleton height={200} />
    <h4 className={style.title}><Skeleton /></h4>
    <Skeleton height={40} />
  </div>
);
