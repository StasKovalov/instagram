import React from "react";
import style from "./index.module.scss";

const CreateAccount = () => {
  return (
    <div className={style.createAccount}>
      <span>У вас еще нет аккаунта?</span>
      <span className={style.register}>Зарегистрироваться</span>
    </div>
  );
};

export default CreateAccount;
