import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import EnterMessage from './EnterMessage/EnterMessage';
import style from './Messages.module.css';


const Messages = (props) => {
    
    let createDialogs =  props.dataMessagesPage.dataDialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);

    let createHistoryMessages =  props.dataMessagesPage.dataHistoryMessages.map(message => <Message message={message.message} />);

    return (<div className={style.messages}>
        <div className={style.messagesBox}>
        <div className={style.dialogs}>
        {createDialogs}
        </div>
        <div className={style.historyMessages}>
            {createHistoryMessages}
        </div>
        </div>
        <EnterMessage newMessageText = {props.dataMessagesPage.newMessageText} updateNewMessageText = {props.updateNewMessageText} addMessage = {props.addMessage} />
    </div>);
}

export default Messages;