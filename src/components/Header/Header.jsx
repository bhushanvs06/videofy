// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';
import { FiBell } from 'react-icons/fi'; // Notification icon

const Header = () => {
  return (
    <header className="header">
      {/* Left Section */}
      <div className="header-left">
        <div className="triangle-icon"></div>
        <div className="logo">Videofy</div>
      </div>

      {/* Center Section (Search) */}
      <div className="header-center">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" />
          <button className="search-button"><div className="triangle-icon"></div></button>
        </div>
      </div>

      {/* Right Section */}
      <div className="header-right">
        <div className="bell-icon">
          <FiBell />
        </div>
        <div className="avatar-container">
          <img src="https://i.pravatar.cc/150?img=32" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
