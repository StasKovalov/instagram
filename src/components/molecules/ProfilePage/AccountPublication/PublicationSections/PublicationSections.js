import React from 'react';
import style from './index.module.scss';

import Icon from '../../../../atoms/Icon';

const LINKS = ['ПУБЛИКАЦИИ', 'IGTV', 'СОХРАНЕНО', 'ОТМЕТКИ'];

const PublicationSections = () => {
    return (
        <ul className={style.accountPublication}>
            <li className={style.liContainer}>
                <Icon sizeS>
                    <span className={style.myPhotos} />
                </Icon>
                <span className={style.sectionName}>{LINKS[0]}</span>
            </li>

            <li className={style.liContainer}>
                <Icon sizeS>
                    <span className={style.igtv} />
                </Icon>
                <span className={style.sectionName}>{LINKS[1]}</span>
            </li>

            <li className={style.liContainer}>
                <Icon sizeS>
                    <span className={style.savedPublications} />
                </Icon>
                <span className={style.sectionName}>{LINKS[2]}</span>
            </li>

            <li className={style.liContainer}>
                <Icon sizeS>
                    <span className={style.marks} />
                </Icon>
                <span className={style.sectionName}>{LINKS[3]}</span>
            </li>
        </ul>
    )
}

export default PublicationSections;