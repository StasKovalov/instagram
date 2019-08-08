import React from "react";
import style from "./index.module.scss"

import Layout from '@pages/Layout';
import List from "@organisms/Main/List";

const Main = props => (
  <Layout>
    <div className={style.container}>
      <List />
    </div>
  </Layout>
);

export default Main;
