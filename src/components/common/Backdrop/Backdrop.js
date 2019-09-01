import React from "react";
import style from "./index.module.scss";

const Backdrop = ({ closeBackdrop }) => (
   <div onClick={closeBackdrop} className={style.backdrop}>
        <button className={style.close}/>
    </div>
);

export default Backdrop;