import React, { useState, useRef } from 'react';
import './VideoCard.css';

const VideoCard = ({ video, onVideoClick }) => {
  const [hovered, setHovered] = useState(false);
  const [playPreview, setPlayPreview] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setPlayPreview(true);
    }, 3000);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setHovered(false);
    setPlayPreview(false);
  };

  return (
    <div
      className={`video-card ${hovered ? 'hovered' : ''}`}
      onClick={() => onVideoClick(video)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-preview-container">
        {playPreview ? (
          <iframe
            className="video-iframe"
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={`YouTube preview of ${video.title}`}
          />
        ) : (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="video-thumbnail"
          />
        )}
      </div>
      <div className="video-info">
        <h4>{video.title}</h4>
        <p>{video.channel} • {video.views} views • {video.time}</p>
      </div>
    </div>
  );
};

export default VideoCard;
