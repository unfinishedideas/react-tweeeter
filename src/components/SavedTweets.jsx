
import React from "react";
import Tweet from "./Tweet";
import Profile from "./Profile";
import CurrentTweet from "./CurrentTweet";


function SavedTweets(){
  const stylee = {
    fontFamily: 'sans-serif',
    border: '2px solid black',
    borderRadius: 20,
    margin: '10px',
    padding: 10
  }
  return (
    <div style={stylee}>
    <CurrentTweet/>
    <Tweet
    author='Dinosaur'
    content="Angry rant!"/>
    </div>
  );

}

export default SavedTweets;
