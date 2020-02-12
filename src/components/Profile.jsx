import React from "react";
import PropTypes from "prop-types";

function Profile(props){
  const nameStyle = {

  }
  const aboutStyle = {
    color: 'rgb(100,100,255)',
  }
  const profileStyle = {
    padding: '20px'
  }
  return (
    <div style={profileStyle}>
      <h3 style={nameStyle}>{props.name}</h3>
      <p style={aboutStyle}><em>{props.aboutMe}</em></p>
      <hr/>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  aboutMe: PropTypes.string.isRequired
};

export default Profile;
