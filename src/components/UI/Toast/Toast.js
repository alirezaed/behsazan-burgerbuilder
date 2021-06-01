import React from 'react';
import { Toast } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useReduxDispatch } from '../../../hooks/useReduxDispatch';
import classes from './Toast.module.css';

export default function MyToast(){

    const toast = useSelector(store=> store.toast);
    const { hideToast } = useReduxDispatch();

    if (!toast.show){
        return null;
    }
    return <div className={classes.container}> 
        <Toast onClose={hideToast} show={toast.show} delay={2000} autohide >
            <Toast.Header>
                <strong className="mr-auto">{toast.title}asd</strong>
            </Toast.Header>
            <Toast.Body>{toast.message}asd</Toast.Body>
        </Toast>
    </div>

}