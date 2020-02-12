import React from "react";
import PropTypes from "prop-types";

function Tweet(props){
  const authorStyle = {

  }
  const contentStyle = {
    color: 'rgb(20,20,255)',
  }
  const tagsStyle = {
    color: 'rgb(50,50,150)',
  }
  const tweetStyle = {

  }
  return (
    <div style={tweetStyle}>
      <h3 style={authorStyle}>{props.author}</h3>
      <p style={contentStyle}><em>{props.content}</em></p>
      <p style={tagsStyle}>{props.tags}</p>
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired
};

export default Tweet;
