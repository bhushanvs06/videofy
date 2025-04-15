import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './FloatingUploadButton.css';

const FloatingUploadButton = () => {
  useEffect(() => {
    // Floating button animation
    const btn = document.querySelector('.floating-upload-btn');
    
    const handleMouseEnter = () => {
      gsap.to(btn, { rotation: 90, scale: 1.1, duration: 0.3, ease: "power1.out" });
    };
    
    const handleMouseLeave = () => {
      gsap.to(btn, { rotation: 0, scale: 1, duration: 0.3, ease: "power1.out" });
    };
    
    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      btn.removeEventListener('mouseenter', handleMouseEnter);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="floating-upload-btn">+</div>
  );
};

export default FloatingUploadButton;