import React from "react";
import SuggestionsContainer from "./SuggestionsContainer";
import SavedTweets from "./SavedTweets";
import ProfileContainer from "./ProfileContainer";

function Homepage(){
  const griddy = {
    fontFamily: 'sans-serif',
    padding: '10px',
  }
  return (
      <div style={griddy}>
        <ProfileContainer/>
        <SavedTweets/>
        <SuggestionsContainer/>
      </div>
  );
}

export default Homepage;
