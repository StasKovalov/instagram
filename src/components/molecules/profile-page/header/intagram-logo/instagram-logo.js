import React from 'react';
import style from './instagram-logo.module.scss';

import Icon from '../../../../atoms/icon';
import { FaInstagram } from 'react-icons/fa';
import Line from '../../../../atoms/line';
import InstagramImg from '../../../../atoms/instagram-img';

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