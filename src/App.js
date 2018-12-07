import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function App({authenticate, unauthenticate, authenticated, loadProfile, profile}) {
  return (
    <div className="App">
      <p>{authenticated ? "Authenticated!" : "Not authenticated :("}</p>
      <p>{profile ? `Profile for ${profile.name} loaded` : "No profile loaded"}</p>
      <button onClick={authenticate}>Authenticate</button>
      <button onClick={unauthenticate}>Unauthenticate</button>
      <br/>
      <button onClick={loadProfile}>Load profile</button>
    </div>
  );
}

App.propTypes = {
  authenticate: PropTypes.func.isRequired,
  unauthenticate: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  loadProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string
  })
};

export default App;
