import React from "react";
import Header from "@organisms/Header";
import style from "./index.module.css";

const Layout = ({ children }) => (
  <div className={style.layout}>
    <Header />
    {children}
  </div>
);

export default Layout;
