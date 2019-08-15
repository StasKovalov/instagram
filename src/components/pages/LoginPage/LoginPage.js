import React, {Component} from "react";
import style from "./index.module.scss";

import {connect} from "react-redux";
import {getAuth} from "../../../redux/actionCreators";

import Login from "@organisms/LoginPage/Login";
import loginPhoneImage from "@assets/iphone-img.png";

class LoginPage extends Component {

  state = {
    authUser: localStorage.getItem("authUser")
  }

  componentDidMount() {
    const {authUser} = this.state;
    console.log(authUser);
    if (authUser) { this.props.getAuth(authUser)};
  }

  render() {
    return (
      <section className={style.container}>
        <main className={style.main}>
          <img className={style.image} alt="iphone-img" src={loginPhoneImage} />
          <Login />
        </main>
      </section>
    );
  }
};

const mapDispatchToProps = {
   getAuth
}

export default connect(null, mapDispatchToProps)(LoginPage);
