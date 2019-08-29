import React from "react";
import style from "./index.module.scss";

const Backdrop = ({ show, closeBackdrop }) => (
    show ? <div onClick={closeBackdrop} className={style.backdrop}>
        <button className={style.close}/>
    </div> : null
);

export default Backdrop;