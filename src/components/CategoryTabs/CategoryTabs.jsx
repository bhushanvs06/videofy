import React from 'react';
import './CategoryTabs.css';

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    'All', 'Music', 'Gaming', 'Movies', 'Live', 'News', 
    'Travel', 'Technology', 'Education', 'Science', 'Entertainment'
  ];

  return (
    <div className="category-tabs">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`category-tab ${activeCategory === category.toLowerCase() ? 'active' : ''}`}
          onClick={() => setActiveCategory(category.toLowerCase())}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;