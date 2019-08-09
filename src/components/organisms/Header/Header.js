import React, { Component } from "react";
import style from "./index.module.scss";

import InstagramLogo from "@molecules/Header/InstagramLogo";
import Input from "@atoms/Input";
import IconSections from "@molecules/Header/IconSections";

const classNames = require('classnames');

class Header extends Component {
    state = {
        scrolled: false
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            const isTop = window.scrollY < 100;
            if (!isTop) { this.setState({ scrolled: true })}
            else { this.setState({ scrolled: false })}
        })
    }

    render() {
        const {scrolled} = this.state;
        console.log(scrolled);
        const styleHeader = classNames(style.header,{
            [style.scrolled]: scrolled
        })
        return (
            <div className={styleHeader}>
                <div className={style.items}>
                    <div className={style.item}><InstagramLogo scrolled={scrolled} /></div>
                    <Input searchInput placeholder='Поиск' />
                    <div className={style.item}><IconSections /></div>
                </div>
            </div>
        )
    }
}

export default Header;