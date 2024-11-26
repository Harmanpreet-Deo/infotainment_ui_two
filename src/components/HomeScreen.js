import React, { useState } from 'react';
import './HomeScreen.css';
import carImage from '../images/car.png'; // Import car image
import albumImage from '../images/album.png'; // Import album image
import { FaMicrophone, FaBluetooth, FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';

const HomeScreen = () => {
  const [activeMode, setActiveMode] = useState('Auto'); // Default mode: AC
  const [isPlaying, setIsPlaying] = useState(false); // Play/Pause state

  return (
    <div className="home-screen-container">
      {/* Weather and Temperature */}
      <div className="home-screen-top-left">
        <div className="weather">
          <span>Surrey ☁️</span>
          <span>23°C Cloudy</span>
        </div>
      </div>

      {/* Bluetooth and Time */}
      <div className="home-screen-top-right">
        <FaBluetooth className="icon" />
        <span className="time">4:39 PM</span>
      </div>

      {/* Top Controls: AC, Heat, Auto */}
      <div className="home-screen-top-controls">
        <button
          className={`control-button ${activeMode === 'AC' ? 'active-ac' : ''}`}
          onClick={() => setActiveMode('AC')}
        >
          AC
        </button>
        <button
          className={`control-button ${activeMode === 'Heat' ? 'active-heat' : ''}`}
          onClick={() => setActiveMode('Heat')}
        >
          Heat
        </button>
        <button
          className={`control-button ${activeMode === 'Auto' ? 'active-auto' : ''}`}
          onClick={() => setActiveMode('Auto')}
        >
          Auto
        </button>
      </div>

      {/* Car Section */}
      <div className="home-screen-main">
        <img src={carImage} alt="Car" className="car-image" />

        {/* Gear Display */}
        <div className="gear-display">
          <span className="current-gear">D</span>
          <span>N</span>
          <span>R</span>
          <span>P</span>
        </div>

        {/* Speed Display */}
        <div className="speed-display">
          <h1>49</h1>
          <span>km/hr</span>
        </div>
      </div>

      {/* Music Widget */}
      <div className="music-widget">
        <img src={albumImage} alt="Album" className="album-image" />
        <div className="song-info">
          <div className="song-title-container">
            <span className="song-title">Rap God (feat. DXSon)</span>
          </div>
        </div>
        <div className="player-controls">
          <button>
            <FaBackward />
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button>
            <FaForward />
          </button>
        </div>
      </div>

      {/* Bottom Right: Battery Info */}
      <div className="home-screen-bottom-right">
        <div className="battery">
          <span>384 km</span>
          <div className="battery-icon"></div>
        </div>
      </div>

      {/* Bottom Left: Microphone */}
      <div className="home-screen-bottom-left">
        <FaMicrophone className="icon" />
      </div>
    </div>
  );
};

export default HomeScreen;
