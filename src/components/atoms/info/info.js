import React from 'react';
import cl from './info.module.scss';

const Info = ({children}) => <span className = {cl['info-item']}>{children}</span>

export default Info;