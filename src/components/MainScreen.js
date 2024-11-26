import React, { useState } from 'react';
import './MainScreen.css'; // Import MainScreen-specific CSS
import HomeScreen from './HomeScreen';
import Navigation from './Navigation';
import { FaCompass, FaHome, FaCog, FaMusic, FaPhone, FaCar } from 'react-icons/fa'; // Import React Icons
import ControlPanel from './ControlPanel';
import Phone from './Phone'; // Import Phone component
import Settings from './Settings';
import MusicSection from './MusicSection';

const MainScreen = () => {
  const [activeScreen, setActiveScreen] = useState('dashboard'); // Default screen
  const [isPhoneMenuVisible, setIsPhoneMenuVisible] = useState(false); // Phone menu visibility

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <HomeScreen />;
      case 'carStatus':
        return <ControlPanel />;
      case 'music':
        return <MusicSection />;
      case 'navigation':
        return <Navigation />;
      case 'settings':
        return <Settings />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="main-screen">
      {/* Main Content Area */}
      <div className="content">{renderScreen()}</div>

      {/* Left Navigation Bar */}
      <div className="left-nav">
        <button
          className={activeScreen === 'navigation' ? 'active' : ''}
          onClick={() => setActiveScreen('navigation')}
        >
          <FaCompass />
        </button>
        <button
          className={activeScreen === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveScreen('dashboard')}
        >
          <FaHome />
        </button>
        <button
          className={activeScreen === 'settings' ? 'active' : ''}
          onClick={() => setActiveScreen('settings')}
        >
          <FaCog />
        </button>
      </div>

      {/* Right Navigation Bar */}
      <div className="right-nav">
        <button
          className={activeScreen === 'music' ? 'active' : ''}
          onClick={() => setActiveScreen('music')}
        >
          <FaMusic />
        </button>
        <button
          className={isPhoneMenuVisible ? 'active' : ''}
          onClick={() => setIsPhoneMenuVisible((prev) => !prev)} // Toggle Phone Menu
        >
          <FaPhone />
        </button>
        <button
          className={activeScreen === 'carStatus' ? 'active' : ''}
          onClick={() => setActiveScreen('carStatus')}
        >
          <FaCar />
        </button>
      </div>

      {/* Phone Component */}
      {isPhoneMenuVisible && <Phone />}
    </div>
  );
};

export default MainScreen;
