import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ activeCategory, setActiveCategory }) => {
  const [isActive, setIsActive] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const sidebarItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '🔥', label: 'Trending' },
    { icon: '📺', label: 'Subscriptions' },
    { icon: '🎵', label: 'Music' },
    { icon: '🎮', label: 'Gaming' },
    { icon: '🎬', label: 'Movies' },
    { icon: '📰', label: 'News' },
    { icon: '⚽', label: 'Sports' },
    { icon: '📚', label: 'Learning' },
    { icon: '👜', label: 'Fashion' }
  ];

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = (label) => {
    setActiveCategory(label.toLowerCase());
    setShowProfile(false); // Hide profile when navigating
    if (window.innerWidth <= 768) {
      setIsActive(false);
    }
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <>
      <div className={`sidebar ${isActive ? 'active' : ''}`}>
        {!showProfile ? (
          <>
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`sidebar-item ${activeCategory === item.label.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleItemClick(item.label)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}

            <div className="sidebar-item profile-section" onClick={handleProfileClick}>
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="Profile"
                className="profile-avatar"
              />
              <span>Your Profile</span>
            </div>
          </>
        ) : (
          <div className="profile-panel">
            <div className="profile-header">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Profile"
                className="profile-avatar-large"
              />
              <h3>John Doe</h3>
              <p>@johndoe</p>
            </div>
            <div className="profile-stats">
              <p>📺 1.2M subscribers</p>
              <p>🎥 230 videos</p>
            </div>
            <p className="profile-bio">
              Welcome to my channel! I make tech tutorials, gaming content, and more.
            </p>
            <button className="back-button" onClick={() => setShowProfile(false)}>
              ← Back to Menu
            </button>
          </div>
        )}
      </div>

      <div className="sidebar-toggle" onClick={toggleSidebar}>☰</div>
    </>
  );
};

export default Sidebar;
