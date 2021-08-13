import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe } from './redux/state';

let renderDOMTree = (state) => {
    ReactDOM.render( < React.StrictMode > < App state = { state }
    addPost = { addPost } updateNewPostText={ updateNewPostText }
    addMessage = { addMessage } updateNewMessageText={ updateNewMessageText }/></React.StrictMode > ,
    document.getElementById('root')
);
}

renderDOMTree(state);

subscribe(renderDOMTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();