import { renderDOMTree } from "../render";

const state = {
    profilePage: {
        dataPosts: [
            { id: '1', message: 'Whats app?', like: '13' },
            { id: '2', message: 'How are you', like: '42' },
            { id: '3', message: 'I am fine. Thanks', like: '5' },
            { id: '4', message: 'What about you?', like: '27' },
            { id: '5', message: 'Not bad.', like: '15' },
            { id: '6', message: 'Never mind. I am Ok.', like: '9' },
        ],
        newPostText: 'it-kamasutra',
    },
    messagesPage: {
        dataDialogs: [
            { id: '1', name: 'Mary' },
            { id: '2', name: 'Alex' },
            { id: '3', name: 'Tess' },
            { id: '4', name: 'Igor' },
            { id: '5', name: 'Alex' },
        ],
        dataHistoryMessages: [
            { id: '1', message: 'Hello!' },
            { id: '2', message: 'What do you mean about new film?' },
            { id: '3', message: 'I think it was very boring!' },
            { id: '4', message: 'Why?' },
            { id: '5', message: 'Because it`s very stupid=)' },
        ],
        newMessageText: 'vikulya'
    },
    // sidebar: {}

}
export let addPost = () => {
    // debugger;
    let newPost = {
        id: '7',
        message: state.profilePage.newPostText,
        like: '0'
    }
    state.profilePage.dataPosts.push(newPost);
    state.profilePage.newPostText = '';
    renderDOMTree(state);
}
export let updateNewPostText = (newText) => {
    // debugger;
    
    state.profilePage.newPostText = newText;
    renderDOMTree(state);
}
export let addMessage = () => {
    // debugger;
    let newMessage = {
        id: '6',
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.dataHistoryMessages.push(newMessage);
    state.messagesPage.newMessageText = '';
    renderDOMTree(state);
}
export let updateNewMessageText = (newText) => {
    // debugger;
    
    state.messagesPage.newMessageText = newText;
    renderDOMTree(state);
}
export default state;