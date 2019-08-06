import React from "react";
import style from "./text.module.scss";

const Text = ({ children }) => <span className={style.text}>{children}</span>;

export default Text;
