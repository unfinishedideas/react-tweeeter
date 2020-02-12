import React from "react";

function TweetForm(){
  const tweetFormStyle = {
    padding: '5px',
    margin: '5px',
  }

  const tweetFormInputStyle = {
    fontSize: '40px',
    width: '750px',
    border: '1px solid black',
    padding: '12px',
    marginBottom: '20px'
  }

  const tweetFormButtonStyle = {
    fontSize: '35px',
    color: 'rgb(255,255,255)',
    textShadow: '1px 1px 1px black',
    backgroundColor: 'rgb(170,170,250)',
    boxShadow: '2px 2px 2px black',
    padding: '10px',
    marginBottom: '10px'
  }
  const bigHr = {
    border: '2px solid rgb(150,150,150)',
  }

  return (
    <div style={tweetFormStyle}>
      <input style={tweetFormInputStyle} type="text" placeholder="What's happening?"/>
      <br/>
      <button style={tweetFormButtonStyle} type="submit" name="button">Tweeeeeet!</button>
      <hr style={bigHr}/>
    </div>
  );
}
export default TweetForm;
