import React, { Component } from "react";
import style from "./index.module.scss";

import { connect } from "react-redux";

import AccountInfo from "@components/ProfilePage/AccountInfo";
import AccountPublication from "@components/ProfilePage/AccountPublication";

class ProfilePage extends Component {
  state = {
    user: null
  };

  componentWillMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.location.state.username !== this.props.location.state.username
    ) {
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { username } = this.props.location.state;
    const { authUser, users } = this.props;
    let user = null;
    if (username === authUser) {
      user = {
        username: authUser,
        full_name: null,
        profile_picture:
          "https://picua.org/images/2019/08/19/8c53056911c201869b986346185f855c.jpg",
        bio: null,
        counts: {
          media: 0,
          follows: 0,
          followed_by: 0
        },
        publications: []
      };
    } else {
      user = users.find(user => user.username === username);
    }
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    const { authUser } = this.props;
    return (
      <div className={style.inner}>
        <main className={style.main}>
          <div className={style.accountInfMargin}>
            <AccountInfo authUser={authUser} user={user} />
          </div>
          <AccountPublication authUser={authUser} user={user} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    users: currentUser.users,
    authUser: currentUser.authUser
  };
};

export default connect(mapStateToProps)(ProfilePage);
