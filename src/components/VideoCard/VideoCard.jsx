import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video, onVideoClick }) => {
  return (
    <div className="video-card" onClick={() => onVideoClick(video)}>
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt="Video thumbnail" />
        <div className="video-duration">{video.duration}</div>
      </div>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <div className="channel-info">
          <div className="channel-avatar"></div>
          <span className="channel-name">{video.channel}</span>
        </div>
        <div className="video-stats">
          <span>{video.views} views</span>
          <span>{video.time}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;