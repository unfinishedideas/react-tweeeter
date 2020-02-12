import React from "react";

function NewUser(){
  const stylee = {
    fontFamily: 'sans-serif',
    border: '2px solid black',
    borderRadius: 20,
    margin: '10px',
    padding: '10px',
    paddingLeft: '30px'
  }
  return (
    <div style={stylee}>
    <h3>New User</h3>
    <form>
    <label>Username</label>
    <input type="text" id="username" placeholder='Username'/>
    
    <label>About Me</label>
    <textarea type="text" id="aboutme" placeholder='Write something about yourself!'/>
    <button>Submit</button>
    </form>
      </div>
  );
}

export default NewUser;
