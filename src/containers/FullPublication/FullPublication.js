import React, { Component } from "react";
import style from "./index.module.scss";

import { Link } from "react-router-dom";
import { connect } from "react-redux"

import UserComment from "@share/UserComment";
import UserActions from "@share/UserActions";
import Photo from "@common/Photo";
import Icon from "@common/Icon";
import Avatar from "@common/Avatar";

class FullPublication extends Component {

    state = {
        username: null,
        profile_picture: null,
        likes: null,
        comments: null,
        photoURL: null
    }

    componentWillMount() {
        this.generateData();
    }

    generateData = () => {
        const { location: { state } } = this.props;
        const { publication, username, profile_picture } = state;
        const jsonPublication = JSON.parse(publication);
        const { photoURL, comments } = jsonPublication;
        const { likes } = jsonPublication.counts;
        this.setState({
            username: username,
            profile_picture: profile_picture,
            photoURL: photoURL,
            likes: likes,
            comments: comments
        })
    }

    render() {
        const { username, profile_picture, likes, comments, photoURL } = this.state;
        return (
            <div className={style.wrapperPublication}>
                <div className={style.wrapperPhoto}>
                    <Photo>
                        <img alt="user Publication" className={style.img} src={photoURL} />
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
                        {comments && comments.map((comment, index) =>
                            <UserComment
                                key={index}
                                comment={comment}
                            />)}
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

export default FullPublication;