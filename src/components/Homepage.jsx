import React from "react";
import SuggestionsContainer from "./SuggestionsContainer";
import TweetsContainer from "./TweetsContainer";
import ProfileContainer from "./ProfileContainer";

function Homepage(){
  const griddy = {
    fontFamily: 'sans-serif',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    gridTemplateRows: '33% 33% 34%',
  }

  return (
    <div style={griddy}>

    <div>
    <ProfileContainer/>
    </div>

    <div>
    <TweetsContainer/>
    </div>

    <div>
    <SuggestionsContainer/>
    </div>

    </div>
  );
}

export default Homepage;
