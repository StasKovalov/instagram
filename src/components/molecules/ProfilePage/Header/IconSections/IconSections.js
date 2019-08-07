import React from 'react';
import style from './index.module.scss';

import Icon from '../../../../atoms/Icon';

const IconSections = () => {
    return (
        <div className={style.iconSections}>
            <Icon sizeM><span className = {style.searchPeople}/></Icon>
            <Icon sizeM><span className = {style.likesPublications}/></Icon>
            <Icon sizeM><span className = {style.myProfile}/></Icon>
        </div>
    )
}

export default IconSections;