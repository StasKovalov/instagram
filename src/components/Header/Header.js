import React, { Component } from "react";
import style from "./index.module.scss";

import InstagramLogo from "./InstagramLogo";
import IconSections from "./IconSections";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const classNames = require("classnames");

class Header extends Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  render() {
    const { authUser } = this.props;
    const { scrolled } = this.state;
    const styleHeader = classNames(style.header, {
      [style.scrolled]: scrolled
    });
    return (
      <div
        className={styleHeader}
        onClick={() => localStorage.removeItem("authUser")}
      >
        {localStorage.getItem("currentUser") ? "in system" : "is not in system"}
        <div className={style.items}>
          <Link className={style.link} to="/">
            <div className={style.item}>
              <InstagramLogo scrolled={scrolled} />
            </div>
          </Link>
          <input className={style.searchInput} placeholder="Поиск" />
          <div className={style.item}>
            <IconSections authUser={authUser} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default connect(mapStateToProps)(Header);
