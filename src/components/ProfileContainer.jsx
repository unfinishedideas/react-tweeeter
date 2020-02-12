import React from "react";
import Profile from "./Profile";

function ProfileContainer(){
  const profileStyle = {
    fontFamily: 'sans-serif',
    border: '2px solid black',
    borderRadius: '20',
    margin: '10px',
    padding: '10'
  }
  return (
    <div style={profileStyle}>
    <Profile
      name="@CurrentUser"
      aboutMe="I can't think of anything creative to write so here we are"/>
      </div>
  );
}

export default ProfileContainer;
