import React, { useState } from 'react';
import './Navigation.css';
import { FaSearch, FaMicrophone, FaBatteryFull, FaBars } from 'react-icons/fa';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

  return (
    <div className="navigation-container">
      {/* Google Map Iframe */}
      <div className="map-wrapper">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10498.08805749669!2d-123.1207!3d49.2827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1692110408407!5m2!1sen!2sca"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Search Bar */}
        <div className="map-search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        {/* Hamburger Menu */}
        <div
          className="navigation-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <FaBars />
        </div>

        {/* Routes and Traffic Menu */}
        {menuOpen && (
          <div className="routes-traffic-menu">
            <div className="route-option">Through 84 King George</div>
            <div className="route-option">Through 100 Avenue</div>
            <div className="traffic-warning">
              <span>High Traffic on 88 Avenue</span>
            </div>
            <div className="estimated-time">
              <span>Estimated Time: 35 min</span>
            </div>
          </div>
        )}
      </div>

      {/* Top-Left: Speed */}
      <div className="navigation-speed">
        <h1>49</h1>
        <span>km/hr</span>
      </div>

      {/* Top-Right: Time and Temperature */}
      <div className="navigation-time-temp">
        <span className="time">4:39 PM</span>
        <span className="temperature">23°C</span>
      </div>

      {/* Bottom-Left: Microphone */}
      <div className="navigation-microphone">
        <FaMicrophone className="microphone-icon" />
      </div>

      {/* Bottom-Right: Battery */}
      <div className="navigation-battery">
        <FaBatteryFull className="battery-icon" />
      </div>
    </div>
  );
};

export default Navigation;
