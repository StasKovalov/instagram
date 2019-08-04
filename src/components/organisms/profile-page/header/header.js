import React from 'react';
import style from './header.module.scss';

import InstagramLogo from '../../../molecules/profile-page/header/intagram-logo';
import Input from '../../../atoms/input';
import IconSections from '../../../molecules/profile-page/header/icon-sections';

const Header = () => {
    return (
        <div className = {style.header}>
            <div className = {style.items}>
                <InstagramLogo />
                <Input searchInput placeholder='Поиск' />
                <IconSections />
            </div>
        </div>
    )
}

export default Header;