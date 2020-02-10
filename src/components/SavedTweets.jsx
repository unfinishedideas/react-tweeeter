
import React from "react";
import Tweet from "./Tweet";
import Profile from "./Profile";
import CurrentTweet from "./CurrentTweet";


function SavedTweets(){
  return (
    <div>
    <CurrentTweet/>
    <Tweet
    author='Dinosaur'
    content="Angry rant!"/>
    </div>
  );

}

export default SavedTweets;
