import React from "react";
import Header from "./Header";
import SuggestionsContainer from "./SuggestionsContainer";
import TweetsContainer from "./TweetsContainer";
import ProfileContainer from "./ProfileContainer";
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import NewUser from './NewUser';


function App(){

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/newuser' component={NewUser}/>
      </Switch>
    </div>
  );
}

export default App;
