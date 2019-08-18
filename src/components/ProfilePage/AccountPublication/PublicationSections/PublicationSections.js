import React from 'react';
import style from './index.module.scss';

import Icon from '@common/Icon';

const LINKS = ['ПУБЛИКАЦИИ', 'IGTV', 'СОХРАНЕНО', 'ОТМЕТКИ'];

const PublicationSections = () => {
    return (
        <ul className={style.accountPublication}>
            <li className={style.liContainer}>
                <Icon>
                    <button className={style.myPhotos} />
                </Icon>
                <span className={style.sectionName}>ПУБЛИКАЦИИ</span>
            </li>

            <li className={style.liContainer}>
                <Icon>
                    <button className={style.igtv} />
                </Icon>
                <span className={style.sectionName}>IGTV</span>
            </li>

            <li className={style.liContainer}>
                <Icon>
                    <button className={style.savedPublications} />
                </Icon>
                <span className={style.sectionName}>СОХРАНЕНО</span>
            </li>

            <li className={style.liContainer}>
                <Icon>
                    <button className={style.marks} />
                </Icon>
                <span className={style.sectionName}>ОТМЕТКИ</span>
            </li>
        </ul>
    )
}

export default PublicationSections;