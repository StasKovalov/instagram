import React, { Component } from "react";
import style from "./index.module.scss";

import { connect } from "react-redux";
import { getAuth } from "@redux/actionCreators";
import { checkValidity } from '@utils';

import { ClipLoader} from "react-spinners";

class Form extends Component {
  state = {
    loginForm: {
      login: {
        elementConfig: {
          type: 'text',
          placeholder: 'Номер телефона, имя пользователя или эл. адрес'
        },
        value: '',
        validation: false
      },
      password: {
        elementConfig: {
          type: 'password',
          placeholder: 'Пароль'
        },
        value: '',
        validation: false
      },
    },
    loading: false,
    isValidForm: false,
  }

  inputChangeHandler = (event, key) => {
    const updateLoginForm = { ...this.state.loginForm };
    const updateLoginEl = { ...updateLoginForm[key] };
    updateLoginEl.value = event.target.value;
    updateLoginEl.validation = checkValidity(event.target.value);
    updateLoginForm[key] = updateLoginEl;

    let isValidForm = true;
    for (const key in updateLoginForm) {
      isValidForm = updateLoginForm[key].validation && isValidForm;
    }

    this.setState({ loginForm: updateLoginForm, isValidForm });
  }

  clickGetAuth = (value) => {
    this.setState({ loading: true })
    const { getAuth } = this.props;
    localStorage.setItem('authUser', value);
    localStorage.setItem('isAuth', true);
    getAuth(value);
    setTimeout(() => this.setState({ loading: false }), 1000);
    
  }

  render() {
    const { loginForm, isValidForm, loading } = this.state;
    const formElArray = [];
    for (const key in loginForm) {
      formElArray.push({
        id: key,
        info: loginForm[key]
      })
    }

    return (
      <div className={style.loginForm}>

        {formElArray.map(formEl =>
          <input
            onChange={(e) => this.inputChangeHandler(e, formEl.id)}
            key={formEl.id}
            value={formEl.info.value}
            className={style.loginInput}
            {...formEl.info.elementConfig} />)}

        <button
          onClick={() => this.clickGetAuth(loginForm.login.value)}
          disabled={!isValidForm} className={style.signInButton}>
          {loading ? <ClipLoader color={'rgba(255, 255, 255, 0.5)'} size={15} /> : "Войти"}
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth
  }
}

const mapDispatchToProps = {
  getAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
