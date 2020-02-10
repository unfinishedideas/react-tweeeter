import React from "react";
import Suggestion from "./Suggestion";

function SuggestionsContainer(){
  const stylee = {
    fontFamily: 'sans-serif',
    border: '2px solid black',
    borderRadius: 20,
    margin: '10px',
    padding: 10
  }
  return (
    <div style={stylee}>
    <Suggestion
      name="Buddy"/>
      </div>
  );
}

export default SuggestionsContainer;
