import React from "react";
import style from "./index.module.scss";

import Header from "@organisms/Header";
import Footer from "@organisms/Footer"

const Layout = ({ children }) => (
  <section className={style.layout}>
    <Header />
    <div className={style.inner}>
      {children}
      <Footer />
    </div>
  </section>
);

export default Layout;

