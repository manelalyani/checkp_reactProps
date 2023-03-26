import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  const { fullName, bio, profession, handleName } = props;
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      {props.children}
      <button onClick={() => handleName(fullName)}>Show Name</button>
    </div>
  );
}
Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'Unknown profession',
  handleName: () => alert('Name not available'),
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
  children: PropTypes.element.isRequired,
};
