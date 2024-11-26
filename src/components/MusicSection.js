import React, { useState } from 'react';
import './MusicSection.css';
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight, FaMicrophone, FaBatteryFull } from 'react-icons/fa';

const MusicSection = () => {
  const [selectedChannel, setSelectedChannel] = useState('93.5 Music Fest');
  const [isPlaying, setIsPlaying] = useState(false);

  const savedChannels = [
    { id: 1, name: '93.5 Music Fest', frequency: '93.5' },
    { id: 2, name: '98.7 Pop Hits', frequency: '98.7' },
    { id: 3, name: '101.1 Jazz Vibes', frequency: '101.1' },
  ];

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel.name);
    setIsPlaying(false); // Pause the music when switching channels
  };

  return (
    <div className="music-container">
      {/* Saved Channels */}
      <div className="saved-channels">
        <h3>Saved Channels</h3>
        <ul>
          {savedChannels.map((channel) => (
            <li
              key={channel.id}
              className={selectedChannel === channel.name ? 'active' : ''}
              onClick={() => handleChannelClick(channel)}
            >
              {channel.name} <button className="delete-btn">✖</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Music Player */}
      <div className="music-player">
        <h3>FM</h3>
        <div className="radio-info">
          <p className="frequency">{savedChannels.find((ch) => ch.name === selectedChannel)?.frequency || '93.5'}</p>
          <p className="song-info">Techzy - {selectedChannel}</p>
        </div>
        <div className="player-controls">
          <FaChevronLeft className="control-icon" title="Previous" />
          {isPlaying ? (
            <FaPause className="control-icon" title="Pause" onClick={() => setIsPlaying(false)} />
          ) : (
            <FaPlay className="control-icon" title="Play" onClick={() => setIsPlaying(true)} />
          )}
          <FaChevronRight className="control-icon" title="Next" />
        </div>
        <div className="progress-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* Corner Elements */}
      <div className="corner top-left">
        <p>23°C <span>cloudy</span></p>
      </div>
      <div className="corner top-right">
        <p>4:39 PM</p>
      </div>
      <div className="corner bottom-left">
        <FaMicrophone className="mic-icon" />
      </div>
      <div className="corner bottom-right">
        <FaBatteryFull className="battery-icon" />
      </div>
    </div>
  );
};

export default MusicSection;
