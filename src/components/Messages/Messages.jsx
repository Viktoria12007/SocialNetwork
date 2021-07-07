import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Messages.module.css';

const Dialog = (props) => {
    return(
        <div className={style.dialog}>
            <NavLink activeClassName={style.active} className={style.link} to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={style.message}>{props.message}</div>
    )
}

const Messages = () => {
    let dataDialogs = [
        {id:'1', name:'Mary'},
        {id:'2', name:'Alex'},
        {id:'3', name:'Tess'},
        {id:'4', name:'Igor'},
        {id:'5', name:'Alex'},
    ];

    let createDialogs =  dataDialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);

    let dataHistoryMessages = [
        {id:'1', message:'Hello!'},
        {id:'2', message:'What do you mean about new film?'},
        {id:'3', message:'I think it was very boring!'},
        {id:'4', message:'Why?'},
        {id:'5', message:'Because it`s very stupid=)'},
    ];

    let createHistoryMessages =  dataHistoryMessages.map(message => <Message message={message.message} />);

    return (<div className={style.messages}>
        <div className={style.dialogs}>
        {createDialogs}
            {/* <Dialog name={dataDialogs[0].name} id={dataDialogs[0].id} />
            <Dialog name={dataDialogs[1].name} id={dataDialogs[1].id} />
            <Dialog name={dataDialogs[2].name} id={dataDialogs[2].id} />
            <Dialog name={dataDialogs[3].name} id={dataDialogs[3].id} />
            <Dialog name={dataDialogs[4].name} id={dataDialogs[4].id} /> */}
        </div>
        <div className={style.historyMessages}>
            {createHistoryMessages}
            {/* <Message message={dataHistoryMessages[0].message} />
            <Message message={dataHistoryMessages[1].message} />
            <Message message={dataHistoryMessages[2].message} />
            <Message message={dataHistoryMessages[3].message} />
            <Message message={dataHistoryMessages[4].message} /> */}
        </div>
    </div>);
}

export default Messages;