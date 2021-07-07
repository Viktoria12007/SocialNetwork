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


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavMenu />
        <div className="app-wrapper-content">
          <Route path='/profile' component={Profile} />
          <Route path='/messages' component={Messages} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
