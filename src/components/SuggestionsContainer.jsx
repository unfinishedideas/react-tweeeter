import React from "react";
import Suggestion from "./Suggestion";

function SuggestionsContainer(){
  const stylee = {
    fontFamily: 'sans-serif',
    border: '2px solid black',
    borderRadius: 20,
    margin: '10px',
    padding: '10px',
    paddingLeft: '30px'
  }
  return (
    <div style={stylee}>
    <h3>Consider following</h3>
    <Suggestion
      name="@Buddy"/>
      </div>
  );
}

export default SuggestionsContainer;
