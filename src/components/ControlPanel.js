import React, { useState } from 'react';
import './ControlPanel.css';
import { FaSnowflake, FaFan, FaFireAlt, FaMicrophone, FaBatteryFull, FaCloud, FaClock } from 'react-icons/fa';

const ControlPanel = () => {
  const [activeTab, setActiveTab] = useState('FanControl'); // Default tab

  const renderContent = () => {
    switch (activeTab) {
      case 'FanControl':
        return (
          <div className="control-panel__fan-control-content">
            <div className="control-panel__dial">
              <div className="control-panel__dial-circle">
                <FaSnowflake className="control-panel__dial-icon" />
              </div>
              <span>AC</span>
            </div>
            <div className="control-panel__dial">
              <div className="control-panel__dial-circle">
                <FaFan className="control-panel__dial-icon" />
              </div>
              <span>Fan Speed</span>
            </div>
            <div className="control-panel__dial">
              <div className="control-panel__dial-circle">
                <FaFireAlt className="control-panel__dial-icon" />
              </div>
              <span>Heater</span>
            </div>
          </div>
        );
      case 'Seating':
        return (
          <div className="control-panel__seating-content">
            <p>Adjust seating settings here.</p>
          </div>
        );
      case 'Lighting':
        return (
          <div className="control-panel__lighting-content">
            <p>Adjust lighting settings here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="control-panel__container">
      {/* Corner Components */}
      <div className="control-panel__corner control-panel__corner--top-left">
        <p>23°C <span className="control-panel__weather-icon"><FaCloud /></span> Cloudy</p>
      </div>
      <div className="control-panel__corner control-panel__corner--top-right">
        <p><FaClock /> 4:39 PM</p>
      </div>
      <div className="control-panel__corner control-panel__corner--bottom-left">
        <FaMicrophone className="control-panel__mic-icon" />
      </div>
      <div className="control-panel__corner control-panel__corner--bottom-right">
        <FaBatteryFull className="control-panel__battery-icon" />
      </div>

      {/* Tabs */}
      <div className="control-panel__tabs">
        <button
          className={`control-panel__tab ${activeTab === 'FanControl' ? 'control-panel__tab--active' : ''}`}
          onClick={() => setActiveTab('FanControl')}
        >
          Fan Control
        </button>
        <button
          className={`control-panel__tab ${activeTab === 'Seating' ? 'control-panel__tab--active' : ''}`}
          onClick={() => setActiveTab('Seating')}
        >
          Seating
        </button>
        <button
          className={`control-panel__tab ${activeTab === 'Lighting' ? 'control-panel__tab--active' : ''}`}
          onClick={() => setActiveTab('Lighting')}
        >
          Lighting
        </button>
      </div>

      {/* Content Area */}
      <div className="control-panel__content">{renderContent()}</div>

      {/* Additional Controls */}
      <div className="control-panel__additional-controls">
        <button className="control-panel__button">Child Lock</button>
        <button className="control-panel__button">Air Circulation</button>
        <button className="control-panel__button">Defrost</button>
      </div>
    </div>
  );
};

export default ControlPanel;
