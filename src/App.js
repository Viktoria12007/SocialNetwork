import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavMenu from './components/NavMenu/NavMenu';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


const App = (props) => {
        return ( 
        <BrowserRouter >
                <div className = "app-wrapper" >
                <Header />
                <NavMenu />
                <div className = "app-wrapper-content" >
                <Route path = '/profile' render = {() => < Profile dataProfilePage = { props.state.profilePage } updateNewPostText = {props.updateNewPostText} addPost = {props.addPost}/>} />
                <Route path = '/messages' render = {() => < Messages dataMessagesPage = { props.state.messagesPage } updateNewMessageText = {props.updateNewMessageText} addMessage = {props.addMessage}/>} />
                <Route path = '/news' render = {() => < News /> } /> 
                <Route path = '/music' render = {() => < Music /> } /> 
                <Route path = '/settings'render = {() => < Settings /> } /> 
                </div> 
                </div> 
                </BrowserRouter>
                );
                }


                export default App;