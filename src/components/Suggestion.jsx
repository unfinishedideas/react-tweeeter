import React from "react";
import PropTypes from "prop-types";

function Suggestion(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <button type="button" name="button">Follow</button>
      <hr/>
    </div>
  );
}

Suggestion.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Suggestion;
