import React, {Component} from 'react';
import style from './index.module.scss';

import {connect} from "react-redux";

import AccountInfo from "@organisms/ProfilePage/AccountInfo";
import AccountPublication from "@organisms/ProfilePage/AccountPublication";

class ProfilePage extends Component  {
    state = {
        user: null
    }

    componentDidMount() {
        const { username, users } = this.props;
        const user = users.find(user => user.username === username);
        this.setState({user})
    }

    render() {
        const {user} = this.state;
        console.log(user);
        return (
            <div className={style.inner}>
                <main className={style.main}>
                    <div className={style.accountInfMargin}>
                        <AccountInfo user={user ? user : {}}/>
                    </div>
                    <AccountPublication user={user ? user : {}}/>
                </main>
            </div>
        )
    }  
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ProfilePage);