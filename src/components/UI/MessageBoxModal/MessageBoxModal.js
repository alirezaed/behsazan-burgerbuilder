import React from 'react';
import { useSelector } from 'react-redux';
import { useReduxDispatch } from '../../../hooks/useReduxDispatch';
import Button from '../Button/Button';
import classes from './MessageBoxModal.module.css';


function MessageBoxModal(props){

    const messageBoxModal = useSelector(store=>store.messageBoxModal);

    const {hideMessageBoxModal} = useReduxDispatch();

    const handleOk=()=>{
        hideMessageBoxModal();
        if (messageBoxModal.onOk){
            messageBoxModal.onOk();
        }
    }

    if (!messageBoxModal.title){
        return null;
    }

    const titleClassNames = [classes.title];
    if (messageBoxModal.type === 'error'){
        titleClassNames.push(classes.error);
    }else if(messageBoxModal.type === 'success'){
        titleClassNames.push(classes.success);
    }

    return <div className={classes.container}>
        <div className={classes.box}>
            <div className={titleClassNames.join(' ')}>
                {messageBoxModal.title}
            </div>
            <div className={classes.body}>
                {messageBoxModal.body}
            </div>
            <div className={classes.actions}>
                <Button title='OK' onClick={handleOk} />
            </div>
        
        </div>
    </div>
}

export default MessageBoxModal;