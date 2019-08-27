import React from "react";
import style from "./index.module.scss"

import List from "@components/Main/List";
import Sidebar from "@components/Main/Sidebar";

import {connect} from "react-redux"

const Main = ({currentUser}) => {
  console.log(currentUser.authUser);
  return (
    <div className={style.inner}>
      <div className={style.container}>
        <List users={currentUser.users}/>
        <Sidebar authUser={currentUser.authUser}/>
      </div>
    </div>
  )
};

const mapStateToProps = ({currentUser}) => ({
    currentUser
})
export default connect(mapStateToProps)(Main);


