import React from 'react';
import rickRollImage from './img/rick-astley.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rickRollImage} className="App-logo" alt="logo" />
        <p>Lets start rolling</p>
      </header>
    </div>
  );
}

export default App;
