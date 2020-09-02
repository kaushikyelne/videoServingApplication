import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from './components/Form/SignIn/SignIn.js';
import SignUp from './components/Form/SignUp/SignUp.js';
import Upload from './components/Upload/Upload.js';
import Dashboard from './components/Dashboard/Dashboard.js';
// import VideoDetails from '../../server/models/VideoDetails.js';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.js';
import signOut from './components/SignOut/signOut.js';
function App() {
  return (
    <React.Fragment>
      <Route exact path="/signOut" render={signOut}/>
      <Route exact path="/video/:videoTitle" component={VideoPlayer}/>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/Upload" component={Upload}/>
    </React.Fragment>
    );
}

export default App;
