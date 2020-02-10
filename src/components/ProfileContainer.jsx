
import React from "react";
import Profile from "./Profile";

function ProfileContainer(){
  const stylee = {
    fontFamily: 'sans-serif',
    border: '2px solid black',
    borderRadius: 20,
    margin: '10px',
    padding: 10
  }
  return (
    <div style={stylee}>
    <Profile
      name="Thato and Haley"
      aboutMe="Firebase will not save record!"/>
      </div>
  );
}

export default ProfileContainer;
