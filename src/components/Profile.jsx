import React from "react";
import PropTypes from "prop-types";

function Profile(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p><em>{props.aboutMe}</em></p>
      <hr/>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  aboutMe: PropTypes.string.isRequired
};

export default Profile;
