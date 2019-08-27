import React, { Component } from 'react';
import style from './index.module.scss';

import { NavLink } from "react-router-dom";

import Icon from '@common/Icon';

class PublicationSections extends Component {

    render() {
        const { username, authUser } = this.props;
        return (
            <ul className={style.accountPublication}>
                <NavLink exact activeClassName={style.active} to={{
                    pathname: `/user/${username}`,
                    state: { username: username }
                }}
                    className={style.link}>
                    <Icon>
                        <span className={style.myPhotos} />
                    </Icon>
                    <span className={style.sectionName}>ПУБЛИКАЦИИ</span>
                </NavLink>

                <NavLink exact activeClassName={style.active} to={{
                    pathname: `/user/${username}/igtv`,
                    state: { username: username }
                }}
                    className={style.link}>
                    <Icon>
                        <span className={style.igtv} />
                    </Icon>
                    <span className={style.sectionName}>IGTV</span>
                </NavLink>

               { username === authUser ? (<NavLink exact activeClassName={style.active} to={{
                    pathname: `/user/${username}/saved`,
                    state: { username: username }
                }}
                    className={style.link}>
                    <Icon>
                        <span className={style.savedPublications} />
                    </Icon>
                    <span className={style.sectionName}>СОХРАНЕНО</span>
                </NavLink>) : null}

                <NavLink exact activeClassName={style.active} to={{
                    pathname: `/user/${username}/tagged`,
                    state: { username: username }
                }}
                    className={style.link}>
                    <Icon>
                        <span className={style.tagged} />
                    </Icon>
                    <span className={style.sectionName}>ОТМЕТКИ</span>
                </NavLink>
            </ul>
        )
    }
}

export default PublicationSections;