import React from "react";
import PropTypes from "prop-types";

function Suggestion(props){
  const suggestionStyle = {

  }
  const nameStyle = {

  }
  const buttonStyle = {
    fontSize: '15px',
    color: 'rgb(255,255,255)',
    textShadow: '1px 1px black',
    backgroundColor: 'rgb(170,170,250)',
    boxShadow: '2px 2px 2px black',
    padding: '10px',
    marginBottom: '10px'
  }
  return (
    <div style={suggestionStyle}>
      <h3 style={nameStyle}>{props.name}</h3>
      <button style={buttonStyle} type="button" name="button">Follow</button>
      <hr/>
    </div>
  );
}

Suggestion.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Suggestion;
