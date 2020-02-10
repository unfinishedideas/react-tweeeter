import React from "react";

function Header(){
  const stylee = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    paddingBottom: '25px'
  }
  return (
    <div style={stylee}>
    <h1>Tweeeeter</h1>
    </div>
  );
}

export default Header;
