import React from 'react';
import style from './index.module.scss';

import {Link} from "react-router-dom";
import Icon from '@atoms/Icon';

const IconSections = ({authUser}) => {
    return (
        <div className={style.iconSections}>
            <Icon ><span className={style.searchPeople} /></Icon>
            <Icon ><span className = {style.likesPublications}/></Icon>
            <Link className={style.link} to={`/${authUser}`}><Icon ><span className = {style.myProfile}/></Icon></Link>
        </div>
    )
}

export default IconSections;