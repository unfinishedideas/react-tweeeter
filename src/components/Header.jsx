import React from "react";

function Header(){
  const headerStyle = {
    color: 'white',
    width: '100%',
    padding: '9px 0px 5px 0px',
    margin: '0',
    left: '0',
    backgroundColor: 'rgb(170,170,250)',
    border: '3px solid rgb(50,50,200)',
    borderRadius: '5px',
    fontSize: '35px',
    fontFamily: 'impact',
    textShadow: '3px 3px 2px black',
    textAlign: 'center'
  };
  const navLinkStyle = {
    fontSize: '15px',
  }

  return (
    <div>
      <div style={headerStyle}>
        <h1>Tweeeeter</h1>
      </div>
      <a href="/" style={navLinkStyle}>Home</a> |
      <a href="/#/newuser" style={navLinkStyle}> New User</a>
    </div>
  );
}

export default Header;
