import React from 'react';
import style from './index.module.scss';

import Icon from '../../../../atoms/Icon';

const IconSections = () => {
    return (
        <div className={style.iconSections}>
            <Icon ><span className = {style.searchPeople}/></Icon>
            <Icon ><span className = {style.likesPublications}/></Icon>
            <Icon ><span className = {style.myProfile}/></Icon>
        </div>
    )
}

export default IconSections;