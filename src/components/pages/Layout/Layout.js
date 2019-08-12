import React from "react";
import style from "./index.module.scss";

import Header from "@organisms/Header";
import Footer from "@organisms/Footer"

const Layout = ({ children }) => (
  <section className={style.layout}>
    <Header />
      {children}
      <Footer/>
  </section>
);

export default Layout;

