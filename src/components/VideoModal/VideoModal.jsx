import React, { useState, useEffect } from 'react';
import './VideoModal.css'; // Make sure to add the matching CSS below


const VideoModal = ({ video, isOpen, onClose }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [bursting, setBursting] = useState({
    like: false,
    share: false,
    follow: false
  });
  
  const [activated, setActivated] = useState({
    like: false,
    share: false,
    follow: false
  });
  
  const handleBurst = (type) => {
    setBursting(prev => ({ ...prev, [type]: true }));
    setActivated(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setBursting(prev => ({ ...prev, [type]: false }));
    }, 400); // time for burst animation
  };
  
  
  useEffect(() => {
    if (isOpen) {
      setPlayVideo(true);
    }
  }, [isOpen]);

  if (!isOpen || !video) return null;

  return (
    <div className="video-float-modal">
      <div className="video-overlay"></div>
      <div className="video-section">

        <div className="video-left">
        <div className="video-player">
  {playVideo && video?.videoId && (
    <iframe
      className="video-element"
      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="YouTube video player"
    ></iframe>
  )}
</div>


<div className="video-actions-bar">
  <button className="action-btn" onClick={() => handleBurst('like')}>
    <div className={`triangle-icon ${activated.like ? 'red' : ''} ${bursting.like ? 'burst' : ''}`} />
    <span className="btn-label">Like</span>
  </button>

  <button className="action-btn" onClick={() => handleBurst('share')}>
    <div className={`triangle-icon rotate-left ${activated.share ? 'red' : ''} ${bursting.share ? 'burst' : ''}`} />
    <span className="btn-label">Share</span>
  </button>

  <button className="action-btn" onClick={() => handleBurst('follow')}>
    <div className={`triangle-icon ${activated.follow ? 'red' : ''} ${bursting.follow ? 'burst' : ''}`} />
    <span className="btn-label">Follow</span>
  </button>
</div>


        </div>

<div className="comments-panel">
  <h3 className="comments-header">Comments <span className="comments-count">368</span></h3>

  <div className="add-comment-box">
    <div className="avatar-circle-pink">A</div>
    <input className="comment-input" placeholder="Add a comment..." />
  </div>

  {/* Comment 1 */}
  <div className="comment-box">
    <div className="avatar-circle-orange">B</div>
    <div className="comment-content">
      <div className="comment-header">
        <span className="username">@sunitalalik7985</span>
        <span className="time">1 year ago (edited)</span>
      </div>
      <div className="comment-text">
        When everyone leaves you Remember that your krishna is always with uu 😭🙏❤
      </div>
      <div className="comment-actions">
        <button className="icon-btn">
          <div className="triangle-icon" /> <span>694</span>
        </button>
        <button className="icon-btn">💬 <span>49</span></button>
        <button className="icon-btn">❤️</button>
      </div>
    </div>
  </div>

  {/* Comment 2 */}
  <div className="comment-box">
    <div className="avatar-circle-dark">S</div>
    <div className="comment-content">
      <div className="comment-header">
        <span className="username">@shivamraics4cs4</span>
        <span className="time">1 month ago</span>
      </div>
      <div className="comment-text">
        I Am Listening This Fluit And Next DAY my Board Exam 😁 Aur Jab Bhi Main Apne Ladale Madhav Ki Bhajan Sunati Hu Toh Bas Uname Hee Kho Jana Chahti Hu Anant Samay Tak 😊
      </div>
      <div className="comment-actions">
        <button className="icon-btn">
          <div className="triangle-icon" /> <span>3</span>
        </button>
        <button className="icon-btn">💬 <span>2</span></button>
      </div>
    </div>
  </div>

  {/* New Sample Comments */}
  <div className="comment-box">
    <div className="avatar-circle-blue">M</div>
    <div className="comment-content">
      <div className="comment-header">
        <span className="username">@meghaverma21</span>
        <span className="time">2 weeks ago</span>
      </div>
      <div className="comment-text">
        This tune hits right in the soul. Peaceful and divine ✨🎶
      </div>
      <div className="comment-actions">
        <button className="icon-btn">
          <div className="triangle-icon" /> <span>112</span>
        </button>
        <button className="icon-btn">💬 <span>8</span></button>
        <button className="icon-btn">❤️</button>
      </div>
    </div>
  </div>

  <div className="comment-box">
    <div className="avatar-circle-green">R</div>
    <div className="comment-content">
      <div className="comment-header">
        <span className="username">@rahul_das</span>
        <span className="time">3 days ago</span>
      </div>
      <div className="comment-text">
        Played this on repeat while studying. Felt so calm and focused. 🔥
      </div>
      <div className="comment-actions">
        <button className="icon-btn">
          <div className="triangle-icon" /> <span>61</span>
        </button>
        <button className="icon-btn">💬 <span>4</span></button>
        <button className="icon-btn">❤️</button>
      </div>
    </div>
  </div>

  <div className="comment-box">
    <div className="avatar-circle-purple">L</div>
    <div className="comment-content">
      <div className="comment-header">
        <span className="username">@lata_singh</span>
        <span className="time">5 days ago</span>
      </div>
      <div className="comment-text">
        Pure bliss... can't stop listening! Jai Shri Krishna 🙏❤️
      </div>
      <div className="comment-actions">
        <button className="icon-btn">
          <div className="triangle-icon" /> <span>87</span>
        </button>
        <button className="icon-btn">💬 <span>6</span></button>
        <button className="icon-btn">❤️</button>
      </div>
    </div>
  </div>

  <div className="comment-box">
    <div className="avatar-circle-red">T</div>
    <div className="comment-content">
      <div className="comment-header">
        <span className="username">@tanishapatil</span>
        <span className="time">1 week ago</span>
      </div>
      <div className="comment-text">
        Whoever composed this... thank you. This healed me in ways I can't explain.
      </div>
      <div className="comment-actions">
        <button className="icon-btn">
          <div className="triangle-icon" /> <span>133</span>
        </button>
        <button className="icon-btn">💬 <span>10</span></button>
        <button className="icon-btn">❤️</button>
      </div>
    </div>
  </div>

  <div className="comment-box">
    <div className="avatar-circle-yellow">K</div>
    <div className="comment-content">
      <div className="comment-header">
        <span className="username">@krish_05</span>
        <span className="time">6 hours ago</span>
      </div>
      <div className="comment-text">
        Listening at 2AM... goosebumps. Music straight from the heart.
      </div>
      <div className="comment-actions">
        <button className="icon-btn">
          <div className="triangle-icon" /> <span>29</span>
        </button>
        <button className="icon-btn">💬 <span>1</span></button>
        <button className="icon-btn">❤️</button>
      </div>
    </div>
  </div>

  <div className="show-replies">Show more replies</div>
  <div className="show-replies">Show more replies</div>
</div>


      </div>

      <button className="triangle-close-btn" onClick={onClose}>
        <div className="triangle-icon-close">
          <span className="close-x">X</span>
        </div>
      </button>
    </div>
  );
};

export default VideoModal;
