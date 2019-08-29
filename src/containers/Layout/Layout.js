import React from "react";
import style from "./index.module.scss";

import classNames from "classnames"
import {connect} from "react-redux";

import Header from "@components/Header";
import Footer from "@components/Footer"

const Layout = ({ children, isAuth }) => {
  const styleLayout = classNames(style.layout, {
    [style.loginPage]:!isAuth
  })
  return (
    <section className={styleLayout}>
      {isAuth ? <Header /> : null}
      {children}
      <Footer />
    </section>
  )
}

const mapStateToProps = ({currentUser}) => ({
  isAuth: currentUser.isAuth
})

export default connect(mapStateToProps)(Layout);

