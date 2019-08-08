import React from 'react';
import style from './index.module.scss';

import Icon from "@atoms/Icon";
import Line from "@atoms/Line";
import InstagramImg from "@atoms/InstagramImg";

const InstagramLogo = () => {
    return (
        <div className = {style.instagramLogo}>
            <Icon><span className = {style.instagramIcon}/></Icon>
            <Line vertical header/>
            <InstagramImg profilePage/>
        </div>
    )
}

export default InstagramLogo;