import React from 'react';
import style from './index.module.scss';

import avatarImg from "../../../../../../assets/example-profile-img.jpg";
import Avatar from '@atoms/Avatar';
import Text from '@atoms/Text';

const Story = (props) => {
    return (
        <div className={style.story}>
            <Avatar
                StoryRecomend
                src={avatarImg}
            />
            <div className={style.timePublication}>
                <Text title>staskovalov</Text>
                <Text subtitle>8 минут назад</Text>
            </div>
        </div>
    )
}

export default Story;