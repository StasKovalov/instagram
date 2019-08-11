import React from "react";
import style from "./index.module.scss"

import Layout from '@pages/Layout';
import List from "@organisms/Main/List";
import Sidebar from "@organisms/Main/Sidebar";

const Main = props => (
  <Layout>
    <div className={style.container}>
      <List/>
      <Sidebar/>
    </div>
  </Layout>
);

export default Main;


