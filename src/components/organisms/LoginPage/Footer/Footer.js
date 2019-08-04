import React from 'react';
import style from './index.module.scss';

import Text from '../../../atoms/Text';

const LINKS = ['О НАС', 'ПОДДЕРЖКА', 'ПРЕССА', 'API', 'ВАКАНСИИ', 'КОНФИДЕНЦИАЛЬНОСТЬ', 'УСЛОВИЯ', 'ДИРЕКТОРИЯ', 'ПРОФИЛИ', 'ХЭШТЕГИ', 'ЯЗЫК'];

const Footer = props => {
    return (
        <div className={style.footer}>
            <div className={style.infoBlock}>
                {LINKS.map(name => <Text links key = {name}>{name}</Text>)}
            </div>
            <span className = {style.inst}>© 2019 INSTAGRAM</span>
        </div>
    )
}

export default Footer;