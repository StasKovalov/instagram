import React from "react";
import style from "./index.module.scss";

import { shuffle } from "@utils"
import { Link } from "react-router-dom"

import Item from "./Item";

const ItemBlock = ({ title, all, subscribe, time, users }) => {

    const randSideBarItems = () => {
        const randUsers = shuffle(users).slice(0, 8)
        return randUsers.map(({ id, profile_picture, username }) => ({ profile_picture, username }));
    }

    return (
        <div className={style.itemBlock}>
            <div className={style.titlesBlock}>
                <span className={style.title}>{title}</span>
                <span className={style.all}>{all}</span>
            </div>
            <div className={style.recomendationsWrapper}>
                {randSideBarItems().map(({ id, profile_picture, username }) =>
                    <Link
                    className={style.link}
                    to={{
                        pathname: `/user/${username}`,
                            state: { username: username }
                    }}>
                        <Item
                            key={id}
                            profile_picture={profile_picture}
                            username={username}
                            subscribe={subscribe}
                            time={time}
                             />
                    </Link>)}
            </div>
        </div>
    )
}

export default ItemBlock