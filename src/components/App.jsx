import React from "react";
import Header from "./Header";
import SuggestionsContainer from "./SuggestionsContainer";
import SavedTweets from "./SavedTweets";
import ProfileContainer from "./ProfileContainer";

function App(){
  return (
    <div>
      <Header/>
      <ProfileContainer/>
      <SavedTweets/>
      <SuggestionsContainer/>
    </div>
  );
}

export default App;
