
import React from "react";
import Tweet from "./Tweet";
import Profile from "./Profile";
import TweetForm from "./TweetForm";

var masterTweets = [
  {
    author: '@JimmyNewtron',
    content: 'Watch out for them particle beams ya\'ll!',
    tags: '#AtomicStuff'
  },
  {
    author: '@Lebowski',
    content: 'I had a long day and I hate the fuckin\' Eagles man!',
    tags: '#JackieTreehorn'
  },
  {
    author: '@SomeTweeterHound',
    content: 'Tweeeter has replaced genuine human contact for me... and I love it!',
    tags: '#Blessed'
  }
];

function TweetsContainer(){
  const feedBoxStyle = {
    fontFamily: 'sans-serif',
    border: '2px solid black',
    borderRadius: '20px',
    margin: '10px',
    padding: '10px',
    boxShadow: '2px 2px black'
  }
  const feedStyle = {
    paddingLeft: '20px'
  }

  return (
    <div style={feedBoxStyle}>
    <TweetForm/>
    <div style={feedStyle}>
    {
    masterTweets.map((tweet, index) =>
      <Tweet
      author={tweet.author}
      content={tweet.content}
      tags={tweet.tags}/>
  )}
  </div>
  </div>
)}


export default TweetsContainer;
