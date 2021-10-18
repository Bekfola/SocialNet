import {Route} from 'react-router-dom';
import './App.css';
import HeaderConnect from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



function App(props) {
  return (

      <div className='app-wrapper'>
        <HeaderConnect />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?'
            render={()=><ProfileContainer />} />
          <Route path='/dialogs'
            render={()=><DialogsContainer />}/>
          <Route path='/news' render={()=><News />}/>
          <Route path='/music' render={()=><Music />}/>
          <Route path='/settings' render={()=><Settings />}/>
          <Route path='/users' render={()=><UsersContainer />} />
          {/*<Profile />   <Dialogs />*/}
        </div>
      </div>

  );
}



export default App;
