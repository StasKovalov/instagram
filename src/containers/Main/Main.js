import React from "react";
import style from "./index.module.scss"

import List from "@components/Main/List";
import Sidebar from "@components/Main/Sidebar";

const Main = props => (
  <div className={style.inner}>
    <div className={style.container}>
      <List />
      <Sidebar />
    </div>
  </div>
);

export default Main;


