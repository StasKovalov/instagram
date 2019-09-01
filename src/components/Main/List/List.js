import React, { Component } from "react";
import Card from "./Card";
import style from "./index.module.scss";


class List extends Component {
  state = {
    isLoading: false,
    isError: false,
  };

  render() {
    const { users } = this.props;
    return (
      <div className={style.list}>
        {users.map(user => (
        <div key={user.id} className={style.cardWrapper}>
          <Card 
              profile_picture={user.profile_picture}
              username={user.username}
              publication = {user.publications[0]} />
        </div>))}
      </div>
    )
  }
}

export default List;
