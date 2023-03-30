import React from "react";
import PropTypes from "prop-types";
function Profile(props) {
  const { fullName, bio, profession, handleName } = props;
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>{props.fullName}</h2>
      <p>{props.bio}</p>
      <p>{props.profession}</p>
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        style={{ width: 200, borderRadius: "50%", marginTop: 20 }}
      />
      <button onClick={() => handleName(fullName)}>Show Name</button>
    </div>
  );
}
  Profile.propTypes={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired,
   children:PropTypes.element.isRequired,
   handleName:PropTypes.func.isRequired,
  };
  Profile.propTypes={
    fullName: "alyani manel",
    bio:"No bio available" ,
    profession:"Unknown profession",
    children:<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>,
  };

export default Profile;
