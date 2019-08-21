import React, { Component } from "react";
import Card, { CardSkeleton } from "./Card";
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
              image={user.publications[0].photoURL}
              likes={user.publications[0].counts.likes}
              comments={user.publications[0].comments} />
        </div>))}
      </div>
    )
  }
}

export default List;
