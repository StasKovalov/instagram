import React, {Component} from "react";
import style from "./index.module.scss";

import ProfileInfo from "@molecules/Main/Sidebar/ProfileInfo";
import Stories from "@molecules/Main/Sidebar/Stories";
import Recomendations from "@molecules/Main/Sidebar/Recomendations"

const classNames = require('classnames');

class Sidebar extends Component  {
    state = {
        scrolled: false
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            const isTop = window.scrollY < 100;
            if (!isTop) { this.setState({ scrolled: true }) }
            else { this.setState({ scrolled: false }) }
        })
    }

    render() {
        const {scrolled} = this.state;
        const sidebarStyle = classNames(style.sidebar, {
            [style.scrolled]: scrolled
        })
        return (
            <div className={sidebarStyle}>
                <ProfileInfo />
                <Stories />
                <Recomendations />
            </div>
        )
    }
}

export default Sidebar;