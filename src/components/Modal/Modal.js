import React, { Component, Fragment } from "react";
import style from "./index.module.scss";
import Backdrop from '@common/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        const { onHideModal, children} = this.props;
        return (
            <Fragment>
                <Backdrop closeBackdrop={onHideModal}/>
                <div className={style.modal}>
                    {children}
                </div>
            </Fragment>
        )
    }

}

export default Modal;
