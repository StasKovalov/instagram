import React from 'react';
import style from './icon-sections.module.scss';

import Icon from '../../../../atoms/icon';

import { IoIosHeartEmpty } from "react-icons/io";
import { MdPersonOutline, MdNotificationsNone } from "react-icons/md";

const IconSections = () => {
    return (
        <div className={style.iconSections}>
            <Icon><MdNotificationsNone size = '2em'/></Icon>
            <Icon><IoIosHeartEmpty size='2em'/></Icon>
            <Icon><MdPersonOutline size='2em' /></Icon>
        </div>
    )
}

export default IconSections;