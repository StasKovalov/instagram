import React, { Component, Fragment } from "react";
import style from "./index.module.scss";
import Backdrop from '@common/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        const {closeBackdrop, show, children} = this.props;
        return (
            <Fragment>
                <Backdrop closeBackdrop={closeBackdrop} show={show} />
                <div className={style.modal}>
                    {children}
                </div>
            </Fragment>
        )
    }

}

export default Modal;
