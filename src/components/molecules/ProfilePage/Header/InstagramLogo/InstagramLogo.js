import React from 'react';
import style from './index.module.scss';

import Icon from '../../../../atoms/Icon';
import { FaInstagram } from 'react-icons/fa';
import Line from '../../../../atoms/Line';
import InstagramImg from '../../../../atoms/InstagramImg';

const InstagramLogo = () => {
    return (
        <div className = {style.instagramLogo}>
            <Icon><FaInstagram size = '2em' /></Icon>
            <Line vertical header/>
            <InstagramImg profilePage/>
        </div>
    )
}

export default InstagramLogo;