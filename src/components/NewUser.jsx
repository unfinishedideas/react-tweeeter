import React from "react";

function NewUser(){
  const stylee = {
    fontFamily: 'sans-serif',
    border: '2px solid black',
    borderRadius: 20,
    margin: '10px',
    padding: '10px',
    paddingLeft: '30px',
  }
  const labelStyles = {
    margin: '20px'
  }
  const textAreaStyles = {
    width: '30%',
    height: '150px'
  }
  return (
    <div style={stylee}>
      <h3>New User</h3>
      <form>
        <label style={labelStyles}>Username</label>
        <input type="text" id="username" placeholder='Username'/>
        <br/>
        <br/>
        <label style={labelStyles}>About Me</label>
        <textarea style={textAreaStyles} type="text" id="aboutme" placeholder='Write something about yourself!'/>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewUser;
