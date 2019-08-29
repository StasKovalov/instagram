import React, { Component } from "react";
import style from "./index.module.scss";

import {Link} from "react-router-dom";

import UserComment from "@share/UserComment";
import UserActions from "@share/UserActions";
import Photo from "@common/Photo";
import Icon from "@common/Icon";
import Avatar from "@common/Avatar";

class FullPost extends Component {
    render() {
        const { username="username", profile_picture, likes } = this.props;
        return (        
                <div className={style.wrapperPublication}>
                    <div className={style.wrapperPhoto}>
                        <Photo>
                        <img alt="user Publication" className={style.img} src="https://picua.org/images/2019/08/13/e23cc9550da29248de799ebc510c3782.jpg" />
                        </Photo>
                    </div>
                    <div className={style.publicationInfo}>
                        <div className={style.userTitle}>
                            <Link className={style.link} to={{
                                pathname: `/user/${username}`,
                                state: { username: username }
                            }}>
                                <div className={style.user}>
                                    <Avatar list src={profile_picture} />
                                    <span className={style.username}>{username}</span>
                                </div>
                            </Link>
                            <Icon>
                                <span className={style.icon} />
                            </Icon>
                        </div>
                        <div className={style.comments}>
                            <UserComment />
                        </div>
                        <div className={style.actionsRate}>
                            <UserActions />
                            <div className={style.userRate}>
                                <span className={style.rate}>{likes} отметок "Нравится"</span>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default FullPost;