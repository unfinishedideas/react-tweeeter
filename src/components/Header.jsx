import React from "react";
// import "./index.css"

function Header(){
  const headerStyle = {
    color: 'white',
    width: '97%',
    margin: 'auto',
    backgroundColor: 'rgb(200,200,250)',
    border: '3px solid rgb(150,150,200)',
    borderRadius: '20px',
    fontSize: '35px',
    fontFamily: 'impact',
    textShadow: '4px 4px 2px black',
    textAlign: 'center',
    boxShadow: '2px 2px black'

  };
  const navLinkStyle = {
    fontSize: '15px',
    textAlign: 'center'
  }
  const navBarStyle = {
    margin: "auto",
    marginTop: '20px',
    textAlign: "center"
  }

  return (
    <div>
      <div style={headerStyle}>
        <h1>Tweeeeter</h1>
      </div>
      <div style={navBarStyle}>
      <a href="/" style={navLinkStyle}>Home</a> |
      <a href="/#/newuser" style={navLinkStyle}> New User</a>
      </div>
    </div>
  );
}

export default Header;
