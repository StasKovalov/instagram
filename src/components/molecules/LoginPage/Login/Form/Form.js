import React from "react";
import style from "./index.module.scss";

import Input from "@atoms/Input";

const Form = props => {
  return (
    <form className={style.loginForm}>
      <div className={style.loginInput}>
        <Input placeholder="Номер телефона, имя пользователя или эл. адрес" />
      </div>
      <div className={style.loginInput}>
        <Input placeholder="Пароль" />
      </div>
      <button className={style.signInButton}>Войти</button>
    </form>
  );
};

export default Form;
