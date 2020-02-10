import React from "react";
import Header from "./Header";
import SuggestionsContainer from "./SuggestionsContainer";
import SavedTweets from "./SavedTweets";
import ProfileContainer from "./ProfileContainer";

function App(){
  const griddy = {
    fontFamily: 'sans-serif',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    padding: '10px'
  }
  return (
    <div>
      <Header/>
      <div style={griddy}>
      <ProfileContainer/>
      <SavedTweets/>
      <SuggestionsContainer/>
      </div>
    </div>
  );
}

export default App;
