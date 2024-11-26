import React from 'react';
import MainScreen from './components/MainScreen'; // Import MainScreen component
import './App.css'; // Import App-specific CSS

const App = () => {
  return (
    <div className="app">
      <div className="infotainment-wrapper">
        <MainScreen />
      </div>
    </div>
  );
};

export default App;
