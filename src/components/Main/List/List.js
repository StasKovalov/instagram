import React, { Component } from "react";
import Card, { CardSkeleton } from "./Card";
import style from "./index.module.scss";

import { connect } from "react-redux";

const getFakeArray = (n = 10) => Array(n).fill();
const DEFAULT_COUNT = 10;
const FAKE_DATA = getFakeArray(5).map((_, i) => ({
  image:
    "https://x.kinja-static.com/assets/images/logos/placeholders/default.png"
}));

const request = new Promise(resolve =>
  setTimeout(() => resolve(FAKE_DATA), 2000)
);

class List extends Component {
  state = {
    isLoading: false,
    isError: false,
    data: null
  };
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.handleLoading();
    request
      .then(data => this.handleSuccess(data))
      .catch(() => this.handleError());
  };

  handleLoading = () => this.setState({ isLoading: true, isError: false });

  handleError = () => this.setState({ isLoading: false, isError: true });

  handleSuccess = data => this.setState({ isLoading: false, data });

  render() {
    const { isLoading, isError, data } = this.state;
    const { users } = this.props;
    return (
      <div className={style.list}>
        {(() => {
          switch (true) {
            case isLoading:
              return getFakeArray(DEFAULT_COUNT).map((_, i) => (
                <div key={i} className={style.cardWrapper}>
                  <CardSkeleton />
                </div>
              ));
            case isError:
              return <div>isError</div>;
            default:
              return (
                // data &&
                // users.map(user => (
                //   <div key={user.id} className={style.cardWrapper}>
                //     <Card
                //       username={user.username}
                //       profile_picture={user.profile_picture}
                //       image={user.publications[0]} />
                //   </div>
                // ))
                <div>123</div>
              );
          }
        })()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(List);
