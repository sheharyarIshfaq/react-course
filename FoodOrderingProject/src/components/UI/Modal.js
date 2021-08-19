import React from 'react';
import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop =(props)=>
{
    return <div className={classes.backdrop} onClick={props.onHideCart}></div>
}

const ModalOverlay =(props)=>{
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
}

const overlayElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
        {ReactDom.createPortal(<Backdrop onHideCart={props.onHideCart} />, overlayElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayElement)}
        </>
    )
}

export default Modal
