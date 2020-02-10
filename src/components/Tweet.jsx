import React from "react";
import PropTypes from "prop-types";

function Tweet(props){
  return (
    <div>
      <h3>{props.author}</h3>
      <p><em>{props.content}</em></p>
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Tweet;
