import React, { useState } from 'react';
import './Phone.css';
import { FaPhone, FaStar, FaClock, FaThLarge, FaMicrophone, FaVolumeUp, FaRegTimesCircle } from 'react-icons/fa';

const Phone = ({ closePhoneMenu = () => {} }) => {
  const [activeTab, setActiveTab] = useState('Dial'); // Default to Dial tab
  const [isCallActive, setIsCallActive] = useState(false); // Call status
  const [callDuration, setCallDuration] = useState(0); // Call duration in seconds
  const [typedNumber, setTypedNumber] = useState(''); // Stores the number being typed
  const [isMuted, setIsMuted] = useState(false); // Mute button status
  const [isSpeakerOn, setIsSpeakerOn] = useState(false); // Speaker button status

  // Simulate call duration
  React.useEffect(() => {
    let timer;
    if (isCallActive) {
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
      setCallDuration(0);
    }
    return () => clearInterval(timer);
  }, [isCallActive]);

  // Format call duration
  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      closePhoneMenu(); // Close phone menu if the same tab is clicked again
    } else {
      setActiveTab(tab);
    }
  };

  const handleKeypadClick = (number) => {
    setTypedNumber((prev) => prev + number);
  };

  const handleBackspace = () => {
    setTypedNumber((prev) => prev.slice(0, -1));
  };

  const handleCall = () => {
    if (typedNumber.trim()) {
      setIsCallActive(true);
      setTypedNumber(''); // Clear the number after placing the call
    }
  };

  return (
    <>
      {/* Call Status Bar */}
      {isCallActive && (
        <div className="phone-call-status-bar">
          <div className="phone-call-info">
            <span className="phone-caller-name">Paimon</span>
            <span className="phone-call-status">Active Call</span>
          </div>
          <div className="phone-call-controls">
            <span className="phone-call-timer">{formatDuration(callDuration)}</span>
            <FaMicrophone
              className={`phone-control-icon ${isMuted ? 'active' : ''}`}
              title="Mute"
              onClick={() => setIsMuted((prev) => !prev)}
            />
            <FaVolumeUp
              className={`phone-control-icon ${isSpeakerOn ? 'active' : ''}`}
              title="Speaker"
              onClick={() => setIsSpeakerOn((prev) => !prev)}
            />
            <FaRegTimesCircle
              className="phone-control-icon"
              title="End Call"
              onClick={() => setIsCallActive(false)}
            />
          </div>
        </div>
      )}

      {/* Phone Menu */}
      <div className="phone-menu-container">
        {/* Tabs */}
        <div className="phone-menu-tabs">
          <FaStar
            className={`phone-menu-icon ${activeTab === 'Contacts' ? 'active' : ''}`}
            onClick={() => handleTabClick('Contacts')}
          />
          <FaClock
            className={`phone-menu-icon ${activeTab === 'Recent' ? 'active' : ''}`}
            onClick={() => handleTabClick('Recent')}
          />
          <FaThLarge
            className={`phone-menu-icon ${activeTab === 'More' ? 'active' : ''}`}
            onClick={() => handleTabClick('More')}
          />
          <FaPhone
            className={`phone-menu-icon ${activeTab === 'Dial' ? 'active' : ''}`}
            onClick={() => handleTabClick('Dial')}
          />
        </div>

        {/* Tab Content */}
        <div className="phone-menu-content">
          {activeTab === 'Recent' && (
            <div className="recent-section">
              <h3>Recent Calls</h3>
              <ul>
                <li>
                  <span>Paimon</span> <span>2 mins ago</span>
                </li>
                <li>
                  <span>Junyi</span> <span>Yesterday</span>
                </li>
                <li>
                  <span>HD</span> <span>3 days ago</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'Dial' && (
            <div className="phone-dial-pad">
              <div className="phone-number-display">
                {typedNumber || 'Enter Number'}
                {typedNumber && <button onClick={handleBackspace}>←</button>}
              </div>
              <div className="phone-dial-numbers">
                {[...Array(9).keys()].map((n) => (
                  <button key={n + 1} onClick={() => handleKeypadClick(n + 1)}>
                    {n + 1}
                  </button>
                ))}
                <button onClick={() => handleKeypadClick(0)}>0</button>
              </div>
              <button className="phone-dial-call-button" onClick={handleCall}>
                <FaPhone />
              </button>
            </div>
          )}

          {activeTab === 'More' && (
            <div className="more-options-section">
              <h3>Additional Features</h3>
              <button className="feature-btn">Voicemail</button>
              <button className="feature-btn">Settings</button>
              <button className="feature-btn">Blocked Numbers</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Phone;
