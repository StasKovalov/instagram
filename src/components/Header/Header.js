import React, { Component } from "react";
import style from "./index.module.scss";

import InstagramLogo from "./InstagramLogo";
import IconSections from "./IconSections";
import FoundUser from "./FoundUser";

import { ClipLoader } from "react-spinners";

import classNames from "classnames";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    scrolled: false,
    value: "",
    filtredUsers: [],
    liveSearchVisible: false,
    isLoading: false
  };

  componentDidMount() {
    this.resizeHeader();
  }

  resizeHeader = () => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  onHideLiveSearch = () => {
    this.setState({ liveSearchVisible: false })
  }

  liveSearch = (e) => {
    this.setState({ value: e.target.value, isLoading: true });
    const { users } = this.props;
    const filtredUsers = users.filter(user => user.username.toLowerCase().includes(e.target.value.toLowerCase().trim()));
    const updFiltredUsers = filtredUsers.map(({ profile_picture, username, full_name, isAdmin }) => ({
      profile_picture, username, full_name, isAdmin
    }));

    setTimeout(() => {
      this.setState({ filtredUsers: updFiltredUsers, liveSearchVisible: true, isLoading: false })
    }, 200)
  }

  render() {
    const { authUser } = this.props;
    const { scrolled, value, filtredUsers, liveSearchVisible, isLoading } = this.state;
    const styleHeader = classNames(style.header, {
      [style.scrolled]: scrolled
    });
    return (
      <div
        className={styleHeader}
      >
        <div className={style.items}>
          <Link className={style.link} to="/">
            <div className={style.item}>
              <InstagramLogo scrolled={scrolled} />
            </div>
          </Link>

          <div className={style.liveSearch}>
            <div className={style.inputFlex}>
              <input
                value={value}
                className={style.searchInput}
                placeholder="Поиск"
                onChange={this.liveSearch}
                onBlur={() => setTimeout(() => {
                  this.setState({ liveSearchVisible: false })
                }, 100)}
              />
              {
                isLoading &&
                <div className={style.spinner}>
                  <ClipLoader color={"rgba(0, 0, 0, 0.5)"} size={13} />
                </div>
              }
            </div>

            {liveSearchVisible &&
              <div className={style.wrapper}>
                <div className={style.filtredUsers}>
                  {filtredUsers && filtredUsers.map(user =>
                    <Link
                      className={style.foundUserLink}
                      to={{
                        pathname: `/user/${user.username}`,
                        state: { username: user.username }
                      }}>
                      <FoundUser key={user.username} {...user} />
                    </Link>)}
                  {!filtredUsers.length && <div className={style.error}>Ничего не найдено</div>}
                </div>
              </div>}

          </div>

          <div className={style.item}>
            <IconSections authUser={authUser} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    authUser: currentUser.authUser,
    users: currentUser.users
  };
};

export default connect(mapStateToProps)(Header);



