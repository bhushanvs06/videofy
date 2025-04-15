import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ activeCategory, setActiveCategory }) => {
  const [isActive, setIsActive] = useState(true);

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
    if (window.innerWidth <= 768) {
      setIsActive(false);
    }
  };

  return (
    <>
      <div className={`sidebar ${isActive ? 'active' : ''}`}>
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
      </div>
      <div className="sidebar-toggle" onClick={toggleSidebar}>☰</div>
    </>
  );
};

export default Sidebar;