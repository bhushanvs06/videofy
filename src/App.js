import React, { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import './App.css';
import { gsap } from 'gsap';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const triangle = document.createElement('div');
    triangle.className = 'triangle-splash';

    const text = document.createElement('div');
    text.className = 'triangle-text';
    text.textContent = 'Welcome to Videofy';

    triangle.appendChild(text);
    document.body.appendChild(triangle);

    // Initial setup (big, centered)
    gsap.set(triangle, {
      scale: 5,
      rotation: 0,
      xPercent: -50,
      yPercent: -50,
      left: '50%',
      top: '50%',
      position: 'fixed',
      transformOrigin: 'center center',
      zIndex: 9999,
    });

    // Show text for 3 seconds before animating away
    setTimeout(() => {
      gsap.to(triangle, {
        scale: 0.3,
        rotation: 720,
        left: '20px',
        top: '20px',
        duration: 1.5,
        ease: 'power2.out',
        onComplete: () => {
          document.body.removeChild(triangle);
          setShowSplash(false);
        }
      });
    }, 3000);
  }, []);

  return (
    <div className="App">
      {!showSplash && <Home />}
    </div>
  );
}

export default App;
