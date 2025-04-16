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
    all: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
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
      category: ["movies", "entertainment", "music","rending"]
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
    },
  
    7: {
      id: 7,
      videoId: "3JZ_D3ELwOQ",
      title: "Imagine Dragons - Believer (Official Music Video)",
      channel: "ImagineDragonsVEVO",
      views: "2.1B",
      time: "5 years ago",
      duration: "3:37",
      thumbnail: "https://i.ytimg.com/vi/W0DM5lcj6mw/maxresdefault.jpg",
      category: ["music", "entertainment"]
    },
    8: {
      id: 8,
      videoId: "kTJczUoc26U",
      title: "Justin Bieber - Peaches ft. Daniel Caesar, Giveon",
      channel: "JustinBieberVEVO",
      views: "650M",
      time: "2 years ago",
      duration: "3:18",
      thumbnail: "https://i.ytimg.com/vi/tQ0yjYUFKAE/maxresdefault.jpg",
      category: ["music", "entertainment"]
    },
    9: {
      id: 9,
      videoId: "WrKL432F86Q",
      title: "How James Cameron Shot Avatar 2 | Behind the Scenes",
      channel: "Film Insider",
      views: "3.2M",
      time: "1 month ago",
      duration: "11:02",
      thumbnail: "https://i.ytimg.com/vi/Cimy6T1nczw/maxresdefault.jpg",
      category: ["movies", "technology"]
    },
    10: {
      id: 10,
      videoId: "bMknfKXIFA8",
      title: "React JS Full Course for Beginners | 2025 Edition",
      channel: "freeCodeCamp.org",
      views: "900K",
      time: "3 weeks ago",
      duration: "4:20:15",
      thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg",
      category: ["education", "technology"]
    },
    11: {
      id: 11,
      videoId: "cIY95KCnnNk",
      title: "Minecraft Speedrunner VS 5 Hunters GRAND FINALE",
      channel: "Dream",
      views: "45M",
      time: "2 years ago",
      duration: "58:45",
      thumbnail: "https://i.ytimg.com/vi/kvnKdRKstsg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgqqw1ejHxiaNHbap-BUAx_mtkAg",
      category: ["gaming", "entertainment"]
    },
    12: {
      id: 12,
      videoId: "R2vXbFp5C9o",
      title: "Inside the World’s Toughest Prisons | Norway’s Halden Prison",
      channel: "Netflix",
      views: "8.2M",
      time: "6 months ago",
      duration: "47:21",
      thumbnail: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcUIzLRGFM40PPzVeKI4SJnhV8dw15oGbUsDBkOMwSsqwnHyc_rnlxP94rZeZKKs_Pd1DgWf1iBf1_yxTO3DBjOI8ESt-lYwZL-B.jpg?r=545",
      category: ["news", "education"]
    },
    13: {
      id: 13,
      videoId: "uf5cYGyo4Tw",
      title: "Top 10 Space Discoveries That Changed the World",
      channel: "SciShow Space",
      views: "1.5M",
      time: "2 months ago",
      duration: "13:15",
      thumbnail: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2xhdGVzdC11bml2ZXJzZS1kaXNjb3Zlcmllcy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==",
      category: ["science", "education"]
    },
    14: {
      id: 14,
      videoId: "yBqS1lcUQzY",
      title: "Tokyo Travel Guide - Best Places To Visit in 2025",
      channel: "Expedia",
      views: "4.7M",
      time: "3 months ago",
      duration: "17:35",
      thumbnail: "https://i.ytimg.com/vi/_cN-QS39HVY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGvLayLLZN27m0uDYzvxbr5PPslg",
      category: ["travel", "entertainment"]
    },
    15: {
      id: 15,
      videoId: "0wCC3E5qG_E",
      title: "How to Start Investing in 2025 (Beginner Guide)",
      channel: "Graham Stephan",
      views: "2.9M",
      time: "1 week ago",
      duration: "20:01",
      thumbnail: "https://cdn.ramseysolutions.net/media/blog/retirement/investing/how-to-start-investing.jpg",
      category: ["education", "news"]
    },
    16: {
      id: 16,
      videoId: "wGQoL1Ztl-g",
      title: "Live Nature Cam - Relaxing Sounds of Forest and River",
      channel: "Nature Relaxation",
      views: "20K watching now",
      time: "Live",
      duration: "Live",
      thumbnail: "https://i.ytimg.com/vi/F1gK85IEeDI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBmFUhrBVPsmHQSIseodCda4x4yxw",
      category: ["live", "travel", "science"]
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
