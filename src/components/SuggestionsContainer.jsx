import React from "react";
import Suggestion from "./Suggestion";

function SuggestionsContainer(){
  const stylee = {
    fontFamily: 'sans-serif',
    border: '2px solid black',
    borderRadius: 20,
    margin: '10px',
    padding: '10px',
    paddingLeft: '30px',
    boxShadow: '2px 2px black'

  }
  return (
    <div style={stylee}>
    <h5>Consider following:</h5>
    <Suggestion
      name="@Buddy"
      about="Heyyy check me out. I AM your buddy, guy!"/>
      </div>
  );
}

export default SuggestionsContainer;
