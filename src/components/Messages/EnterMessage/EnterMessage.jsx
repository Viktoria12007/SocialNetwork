import React from 'react';
import style from './../Messages.module.css';

const EnterMessage = (props) => {

    const textArea = React.createRef();

    // function createNewMessage() {
    // let newMessage = textArea.current.value;
    // alert(newMessage);
    // textArea.current.value = '';
    // }

    function changeMessage() {
        const text = textArea.current.value;
        props.updateNewMessageText(text);  
    }

    return(
        <form className={style.newMessage}>
            <textarea className={style.enterMessage} ref={textArea} onChange={changeMessage} value={props.newMessageText}></textarea>
            <button className={style.addMessage} onClick={props.addMessage} type='button'>Send</button>
            </form>
    )
}

export default EnterMessage;

