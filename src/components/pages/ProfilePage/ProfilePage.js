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
        const { username, users, authUser } = this.props;
        console.log(username, authUser );
        if (authUser === username) {
            this.setState({
                user: {
                    username: authUser,
                    full_name: null,
                    profile_picture: "https://picua.org/images/2019/08/13/79b07f873807eeb203327ab5dc99010b.jpg",
                    bio: null,
                    counts: {
                        media: 0,
                        follows: 0,
                        followed_by: 0
                    },
                    publications: []
                    }})
        } else {
            const user = users.find(user => user.username === username);
            this.setState({ user })
        }
    }

    render() {
        const { user } = this.state;
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
        users: state.users,
        authUser: state.authUser
    }
}

export default connect(mapStateToProps)(ProfilePage);