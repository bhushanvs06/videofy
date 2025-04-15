import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import CategoryTabs from '../../components/CategoryTabs/CategoryTabs';
import VideoCard from '../../components/VideoCard/VideoCard';
import VideoModal from '../../components/VideoModal/VideoModal';
import FloatingUploadButton from '../../components/FloatingUploadButton/FloatingUploadButton';
import './Home.css';
import { gsap } from 'gsap';

const Home = () => {
  const videoData = {
    all: [1, 2, 3, 4, 5, 6],
    music: [1, 5],
    gaming: [2, 6],
    movies: [1, 3],
    live: [4],
    news: [3, 6],
    travel: [4],
    technology: [2, 5, 6],
    education: [3],
    science: [6],
    entertainment: [1, 5]
  };

  const videos = {
    1: {
      id: 1,
      videoId: "XlYWZRf_IKM",
      title: "Mastering the Art of Cinematic Videography: Techniques from Hollywood",
      channel: "CinemaAcademy",
      views: "286K",
      time: "2 days ago",
      duration: "12:34",
      thumbnail: "https://www.videograph.ai/wp-content/uploads/2024/09/videography-jpg.webp",
      category: ["movies", "entertainment", "music"]
    },
    2: {
      id: 2,
      videoId: "cvhh7VndYpU",
      title: "5 Web Development Tips That Can Double Your Productivity",
      channel: "CodeMaster",
      views: "1.2M",
      time: "1 week ago",
      duration: "8:56",
      thumbnail: "https://simpleprogrammer.com/wp-content/uploads/2019/08/Developer-Productivity-Tips.jpg",
      category: ["technology", "gaming"]
    },
    3: {
      id: 3,
      videoId: "T4CB5RPbtCk",
      title: "The Unexpected Key to Boosting Your Productivity | The Way We Work, a TED series",
      channel: "TEDX",
      views: "3.4M",
      time: "3 months ago",
      duration: "15:22",
      thumbnail: "https://i.ytimg.com/vi/T4CB5RPbtCk/maxresdefault.jpg",
      category: ["education", "news", "movies"]
    },
    4: {
      id: 4,
      videoId: "iPYP_8roGhc",
      title: "Ultimate Travel Guide: Hidden Gems of Southeast Asia",
      channel: "Wanderlust",
      views: "567K",
      time: "2 weeks ago",
      duration: "22:45",
      thumbnail: "https://i.ytimg.com/vi/Odq0r_IryuA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuNqBRHW8V3pCMbjV2PoHHh9d5vQ",
      category: ["travel", "live"]
    },
    5: {
      id: 5,
      videoId: "dyRsYk0LyA8",
      title: "Modern UI/UX Design Trends That Will Dominate 2025",
      channel: "DesignPro",
      views: "892K",
      time: "4 days ago",
      duration: "7:19",
      thumbnail: "https://www.sstechsystem.com/wp-content/uploads/2024/12/UI-Design-Trends-for-2025.png",
      category: ["technology", "entertainment", "music"]
    },
    6: {
      id: 6,
      videoId: "nKIu9yen5nc",
      title: "Artificial Intelligence: The Future of Technology Explained",
      channel: "TechInsights",
      views: "1.8M",
      time: "1 month ago",
      duration: "14:07",
      thumbnail: "https://www.orangemantra.com/blog/wp-content/uploads/2024/01/Future-of-AI.png",
      category: ["technology", "science", "news", "gaming"]
    }
  };

  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedVideos, setDisplayedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    updateDisplayedVideos('all');
  }, []);

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    } else {
      updateDisplayedVideos(activeCategory);
    }
  }, [activeCategory, searchTerm]);

  const updateDisplayedVideos = (category) => {
    const videoIds = videoData[category] || [];
    const videosToDisplay = videoIds.map(id => videos[id]);

    gsap.to(".videos-grid", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setDisplayedVideos(videosToDisplay);
        setTimeout(() => {
          gsap.to(".videos-grid", {
            opacity: 1,
            y: 0,
            duration: 0.5
          });
        }, 300);
      }
    });
  };

  const handleSearch = () => {
    const results = Object.values(videos).filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.channel.toLowerCase().includes(searchTerm.toLowerCase())
    );

    gsap.to(".videos-grid", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setDisplayedVideos(results);
        setTimeout(() => {
          gsap.to(".videos-grid", {
            opacity: 1,
            y: 0,
            duration: 0.5
          });
        }, 300);
      }
    });
  };

  const handleVideoClick = (video) => {
    const triangle = document.createElement('div');
    triangle.className = 'triangle-transition';
    document.body.appendChild(triangle);

    gsap.to(triangle, {
        scale: 20,
        rotation: 360,
        duration: 0.6,
        ease: 'power3.out',
        onComplete: () => {
          setSelectedVideo(video);
          setIsModalOpen(true);
          document.body.removeChild(triangle);
        }
      });
      
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="home-page">
      <div className="triangle-deco triangle-up"></div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      <div className="main-content">
        <div className="container">
          <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

          <div className="videos-grid layout-enhanced">
            {displayedVideos.map(video => (
              <div className="video-card-wrapper" key={video.id}>
                <div className="triangle-up triangle-deco"></div>
                <VideoCard video={video} onVideoClick={handleVideoClick} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="upload-button-wrapper">
        <div className="triangle-up triangle-deco"></div>
        <FloatingUploadButton />
      </div>

      <input
        type="file"
        accept="video/*"
        id="video-upload-input"
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            alert(`You selected: ${file.name}`);
            // Future handling for uploads
          }
        }}
      />

      {isModalOpen && (
        <div className="triangle-down triangle-deco"></div>
      )}
      <VideoModal 
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Home;