import React from "react";
import style from "./index.module.scss";

const Backdrop = ({ closeBackdrop }) => {
    
    return (
        <div onClick={closeBackdrop} className={style.backdrop}>
           <button className={style.close} />
        </div>
    )
};

export default Backdrop;