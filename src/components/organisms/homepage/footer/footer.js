import React from 'react';
import './footer.scss';

import Info from '../../../atoms/info/info';

const Footer = props => {
    const infoNames = ['О НАС', 'ПОДДЕРЖКА', 'ПРЕССА', 'API', 'ВАКАНСИИ', 'КОНФИДЕНЦИАЛЬНОСТЬ', 'УСЛОВИЯ', 'ДИРЕКТОРИЯ', 'ПРОФИЛИ', 'ХЭШТЕГИ', 'ЯЗЫК'];
    return (
        <div className = 'footer'>
            <div className = 'info-block'>
                {infoNames.map(name => <Info>{name}</Info>)}
            </div>
            <span>© 2019 INSTAGRAM</span>
        </div>
    )
}

export default Footer;