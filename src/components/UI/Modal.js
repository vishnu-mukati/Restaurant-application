import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "../UI/Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalelements = document.getElementById('overlays');

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalelements)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
            portalelements)}
    </Fragment>
}

export default Modal;