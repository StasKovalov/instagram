import React, { Component } from "react";
import Card, { CardSkeleton } from "@molecules/Main/Card";
import style from "./index.module.css";

const getFakeArray = (n = 10) => Array(n).fill();
const DEFAULT_COUNT = 10;
const FAKE_DATA = getFakeArray(5).map((_, i) => ({
  title: `Title-${i}`,
  description: `Lorem ipsum dolor sit-${i}`,
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
              console.log('error')
              return <div>isError</div>;
            default:
              return (
                data &&
                data.map(card => (
                  <div key={card.title} className={style.cardWrapper}>
                    <Card {...card} />
                  </div>
                ))
              );
          }
        })()}
      </div>
    );
  }
}

export default List;
