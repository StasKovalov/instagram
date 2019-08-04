import React from 'react';
import style from './index.module.scss';

import Icon from '../../../../atoms/Icon';

const LINKS = [['ПУБЛИКАЦИИ',], ['IGTV',], ['СОХРАНЕНО',], ['ОТМЕТКИ',], ];

const PhotoSections = () => {
    return (
        <ul className = {style.photosSections}>
            {LINKS.map(link => <li className={style.photoSection}><Icon></Icon>{link}</li>)}
        </ul>
    )
}

export default PhotoSections;