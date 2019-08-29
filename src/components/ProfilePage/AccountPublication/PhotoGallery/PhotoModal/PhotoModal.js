import React from "react";
import style from "./index.module.scss";
import FullPublication from "@containers/FullPublication";

const PhotoModal = ({ onHideModal, ...props }) => (
  <div className={style.backDrop} onClick={onHideModal}>
    <div className={style.contentWrapper}>
      <FullPublication {...props} />
    </div>
  </div>
);

export default PhotoModal;
