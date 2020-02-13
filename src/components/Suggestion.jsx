import React from "react";
import PropTypes from "prop-types";

function Suggestion(props){
  const suggestionStyle = {

  }
  const nameStyle = {

  }
  const buttonStyle = {
    fontSize: '18px',
    color: 'rgb(255,255,255)',
    textShadow: '1px 1px black',
    backgroundColor: 'rgb(170,170,250)',
    boxShadow: '2px 2px 2px black',
    padding: '10px',
    marginBottom: '10px'
  }
  const aboutStyle = {
    color: 'rgb(100,100,255)',
  }
  return (
    <div style={suggestionStyle}>
      <h3 style={nameStyle}>{props.name}</h3>
      <p style={aboutStyle}><em>{props.about}</em></p>
      <hr/>
      <button style={buttonStyle} type="button" name="button">Follow</button>
    </div>
  );
}

Suggestion.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};

export default Suggestion;
