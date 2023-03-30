import React from 'react';
import './App.css';
import Profile from'./component/Profile'
function App() {
  const alertMyInput = fullName => alert(fullName);
  return (
    <div className="App">
    <Profile profession="Unknown profession" bio="No bio available" fullName="manel" >
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
  </Profile>
    </div>
    
  );
}

export default App;

