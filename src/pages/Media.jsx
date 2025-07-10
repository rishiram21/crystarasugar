import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const events = [
  { title: "Event 1", image: "/event/event1.jpg" },
  { title: "Event 2", image: "/event/event2.jpg" },
  { title: "Event 3", image: "/event/event3.jpg" },
  { title: "Event 4", image: "/event/event4.jpg" },
  { title: "Event 5", image: "/event/event5.jpg" },
  { title: "Event 6", image: "/event/event6.jpg" },
];

const videos = [
  { title: "Video 1", thumbnail: "/thumbnail/1.png", src: "/videos/vid1.mp4" },
  { title: "Video 2", thumbnail: "/thumbnail/2.png", src: "/videos/vid2.mp4" },
  { title: "Video 3", thumbnail: "/thumbnail/3.png", src: "/videos/vid3.mp4" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

// Optimized Image Component with lazy loading and progressive loading
const OptimizedImage = ({ src, alt, className, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsError(true);
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = src;
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(img);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder while loading */}
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-50"></div>
        </div>
      )}
      
      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-500 text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Failed to load</div>
          </div>
        </div>
      )}

      <img
        ref={imgRef}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

// Optimized Video Component
const OptimizedVideo = ({ video, index, isPlaying, onToggle }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isPlaying) {
            videoElement.play().catch(console.error);
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (isPlaying) {
      observer.observe(videoElement);
    }

    return () => observer.disconnect();
  }, [isPlaying]);

  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleVideoError = useCallback(() => {
    setIsError(true);
  }, []);

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer" 
      onClick={() => onToggle(index)}
      variants={fadeInUp}
    >
      <div className="relative w-full h-56">
        {isPlaying ? (
          <div className="relative w-full h-full">
            {!isLoaded && !isError && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-gray-500">Loading video...</div>
              </div>
            )}
            
            {isError && (
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="text-2xl mb-2">🎥</div>
                  <div className="text-sm">Failed to load video</div>
                </div>
              </div>
            )}

            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              playsInline
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <OptimizedImage
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-56"
          />
        )}
        
        {/* Play button overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300">
            {/* <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-8 border-l-gray-800 border-y-6 border-y-transparent ml-1"></div>
            </div> */}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{video.title}</h3>
        <p className="text-sm text-gray-500 text-center">
          Click to {isPlaying ? "pause" : "play"}
        </p>
      </div>
    </motion.div>
  );
};

function Media() {
  const [activeTab, setActiveTab] = useState("events");
  const [loading, setLoading] = useState(true);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [loadedImages, setLoadedImages] = useState(0);
  const [bannerLoaded, setBannerLoaded] = useState(false);

  // Preload critical images
  useEffect(() => {
    const preloadBanner = new Image();
    preloadBanner.src = '/banner/mediaimg.jpg';
    preloadBanner.onload = () => setBannerLoaded(true);
    preloadBanner.onerror = () => setBannerLoaded(true); // Still show page even if banner fails
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Reduce initial loading time
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = useCallback(() => {
    setLoadedImages(prev => prev + 1);
  }, []);

  const handleVideoToggle = useCallback((index) => {
    setPlayingVideo(current => current === index ? null : index);
  }, []);

  const currentItems = activeTab === "events" ? events : videos;

  return (
    <motion.div 
      className="bg-purple-300 min-h-screen px-4 md:px-20" 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainer}
    >
      <div className="container mx-auto py-8">
        {/* Optimized Banner */}
        <motion.div 
          className="relative w-full h-48 flex items-center rounded-lg shadow-md mb-5 bg-cover bg-center overflow-hidden" 
          style={{ 
            backgroundImage: bannerLoaded ? "url('/banner/mediaimg.jpg')" : 'none',
            minHeight: "200px",
            backgroundColor: bannerLoaded ? 'transparent' : '#9333ea'
          }} 
          variants={fadeInUp}
        >
          {!bannerLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 animate-pulse"></div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <h1 className="relative text-2xl md:text-5xl font-bold text-white mx-auto z-10">
            Media
          </h1>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <motion.button 
            className={`px-6 py-2 text-lg font-semibold rounded-l-md transition-all ${
              activeTab === "events" 
                ? "bg-purple-700 text-white" 
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
            onClick={() => setActiveTab("events")} 
            whileTap={{ scale: 0.95 }}
          >
            📸 Event Gallery
          </motion.button>
          <motion.button 
            className={`px-6 py-2 text-lg font-semibold rounded-r-md transition-all ${
              activeTab === "videos" 
                ? "bg-purple-700 text-white" 
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
            onClick={() => setActiveTab("videos")} 
            whileTap={{ scale: 0.95 }}
          >
            🎥 Video Gallery
          </motion.button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-gray-500">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto mb-4"></div>
            Loading media...
          </div>
        ) : (
          <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer}>
            {activeTab === "events" && events.map((event, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300" 
                variants={fadeInUp}
              >
                <OptimizedImage
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56"
                  onLoad={handleImageLoad}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            ))}
            
            {activeTab === "videos" && videos.map((video, index) => (
              <OptimizedVideo
                key={index}
                video={video}
                index={index}
                isPlaying={playingVideo === index}
                onToggle={handleVideoToggle}
              />
            ))}
          </motion.div>
        )}

        {/* Loading Progress for Events */}
        {activeTab === "events" && loadedImages < events.length && (
          <div className="text-center mt-4 text-gray-500">
            <div className="text-sm">
              Loading images... {loadedImages} of {events.length}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2 max-w-md mx-auto">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(loadedImages / events.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Media;