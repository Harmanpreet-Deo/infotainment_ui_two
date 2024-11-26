import React, { useState } from 'react';
import './Settings.css';
import { FaWifi, FaBluetooth, FaDesktop, FaSlidersH, FaThLarge, FaMicrophone } from 'react-icons/fa';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Bluetooth');
  const [connectedDevice, setConnectedDevice] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Handle Bluetooth Device Selection
  const handleDeviceSelect = (device) => {
    setConnectedDevice(device);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  // Render Content Based on Active Tab
  const renderContent = () => {
    switch (activeTab) {
        case 'WiFi':
            return (
              <div className="settings-content wifi">
                <h3>Available Networks</h3>
                <ul>
                  <li>Network 1 <button className="connect-btn">Connect</button></li>
                  <li>Network 2 <button className="connect-btn">Connect</button></li>
                  <li>Network 3 <button className="connect-btn">Connect</button></li>
                </ul>
                <div className="wifi-details">
                  <p>Connected to: <strong>Network 1</strong></p>
                  <p>Signal Strength: <span className="signal-icon">📶</span> Excellent</p>
                </div>
              </div>
            );
      case 'Bluetooth':
        return (
          <div className="settings-content bluetooth">
            <h3>Available Devices</h3>
            <ul>
              <li onClick={() => handleDeviceSelect("HD's Phone")}>
                HD's Phone <span className="connect-icon">🔗</span>
              </li>
              <li onClick={() => handleDeviceSelect("Junyi's iPod")}>
                Junyi's iPod <span className="connect-icon">🔗</span>
              </li>
              <li onClick={() => handleDeviceSelect("Paimon's Phone")}>
                Paimon's Phone <span className="connect-icon">🔗</span>
              </li>
            </ul>
            <div className="settings-search">
              <FaThLarge className="search-icon" />
              <p>Searching for nearby devices...</p>
            </div>
            <div className="device-name">
              <p>Your Device: "Your Device Name"</p>
            </div>
          </div>
        );
        case 'Display':
            return (
              <div className="settings-content display">
                <h3>Display Settings</h3>
                <div className="brightness-slider">
                  <label>Brightness</label>
                  <input type="range" min="0" max="100" defaultValue="50" />
                </div>
                <div className="theme-selector">
                  <p>Theme:</p>
                  <button className="theme-btn">Light</button>
                  <button className="theme-btn active">Dark</button>
                </div>
              </div>
            );
        case 'Controls':
            return (
                <div className="settings-content controls">
                <h3>Control Settings</h3>
                <div className="control-options">
                    <button className="control-btn">Steering Sensitivity</button>
                    <button className="control-btn">Auto-Pilot Settings</button>
                    <button className="control-btn">Brake Adjustment</button>
                </div>
                </div>
            );
              
      default:
        return (
          <div className="settings-content">
            <h3>General Settings</h3>
            <p>Select a tab to view its settings.</p>
          </div>
        );
    }
  };

  return (
    <div className="settings-container">
      {/* Corner Elements */}
      <div className="settings-corner settings-top-left">
        <p>23°C <span>cloudy</span></p>
      </div>
      <div className="settings-corner settings-top-right">
        <p>4:39 PM</p>
      </div>
      <div className="settings-corner settings-bottom-right">
        <div className="battery"></div>
      </div>
      <div className="settings-corner settings-bottom-left">
        <FaMicrophone className="mic-icon" />
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="bluetooth-popup">
          <p>{connectedDevice} Connected</p>
        </div>
      )}

      {/* Menu Bar */}
      <div className="settings-menu">
        <button
          className={activeTab === 'WiFi' ? 'active' : ''}
          onClick={() => setActiveTab('WiFi')}
        >
          <FaWifi />
        </button>
        <button
          className={activeTab === 'Bluetooth' ? 'active' : ''}
          onClick={() => setActiveTab('Bluetooth')}
        >
          <FaBluetooth />
        </button>
        <button
          className={activeTab === 'Display' ? 'active' : ''}
          onClick={() => setActiveTab('Display')}
        >
          <FaDesktop />
        </button>
        <button
          className={activeTab === 'Controls' ? 'active' : ''}
          onClick={() => setActiveTab('Controls')}
        >
          <FaSlidersH />
        </button>
      </div>

      {/* Content Area */}
      <div className="settings-section">{renderContent()}</div>
    </div>
  );
};

export default Settings;
