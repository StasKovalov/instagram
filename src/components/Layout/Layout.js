import React from "react";
import style from "./index.module.scss";

import Header from "@components/Header";
import Footer from "@components/Footer"

const Layout = ({ children }) => (
  <section className={style.layout}>
    <Header />
      {children}
      <Footer/>
  </section>
);

export default Layout;

