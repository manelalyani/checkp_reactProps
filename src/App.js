import React from 'react';
import './App.css';
import './component/Profile'
function App() {
  const alertMyInput = fullName => alert(fullName);
  return (
    <div className="App">
    <Profile/>
    </div>
    
  );
}

export default App;

