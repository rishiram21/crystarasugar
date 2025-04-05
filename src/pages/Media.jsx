import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const events = [
  { title: "Event 1", image: "/event1.jpg" },
  { title: "Event 2", image: "/event2.jpg" },
  { title: "Event 3", image: "/event3.jpg" },
  { title: "Event 4", image: "/event4.jpg" },
  { title: "Event 5", image: "/event5.jpg" },
  { title: "Event 6", image: "/event6.jpg" },
];

const videos = [
  { title: "Video 1", thumbnail: "/thumbnail.jpg", src: "/videogallery1.mp4" },
  { title: "Video 2", thumbnail: "/thumbnail.jpg", src: "/videogallery4.mp4" },
  { title: "Video 3", thumbnail: "/thumbnail.jpg", src: "/videogallery3.mp4" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

function Media() {
  const [activeTab, setActiveTab] = useState("events");
  const [loading, setLoading] = useState(true);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target;
            video.play().catch((error) => {
              console.error("Error attempting to play", error);
            });
          } else {
            const video = entry.target;
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div className="bg-purple min-h-screen" initial="hidden" animate="visible" variants={staggerContainer}>
      <div className="container mx-auto px-6 md:px-20 py-8">
        <motion.div className="relative w-full h-48 flex items-center rounded-lg shadow-md mb-5 bg-cover bg-center" style={{ backgroundImage: "url('/mediaimg.jpg')", minHeight: "200px" }} variants={fadeInUp}>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <h1 className="relative text-2xl md:text-5xl font-bold text-white mx-auto">Media</h1>
        </motion.div>

        <div className="flex justify-center mb-6">
          <motion.button className={`px-6 py-2 text-lg font-semibold rounded-l-md transition-all ${activeTab === "events" ? "bg-purple-700 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"}`} onClick={() => setActiveTab("events")} whileTap={{ scale: 0.95 }}>
            📸 Event Gallery
          </motion.button>
          <motion.button className={`px-6 py-2 text-lg font-semibold rounded-r-md transition-all ${activeTab === "videos" ? "bg-purple-700 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"}`} onClick={() => setActiveTab("videos")} whileTap={{ scale: 0.95 }}>
            🎥 Video Gallery
          </motion.button>
        </div>

        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer}>
            {activeTab === "events" && events.map((event, index) => (
              <motion.div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300" variants={fadeInUp}>
                <img src={event.image} alt={event.title} className="w-full h-56 object-cover lazyload" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{event.title}</h3>
                </div>
              </motion.div>
            ))}
            {activeTab === "videos" && videos.map((video, index) => (
              <motion.div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => setPlayingVideo(playingVideo === index ? null : index)} variants={fadeInUp}>
                {playingVideo === index ? (
                  <motion.video ref={(el) => (videoRefs.current[index] = el)} autoPlay className="w-full h-56 object-cover lazyload" loading="lazy">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </motion.video>
                ) : (
                  <motion.img src={video.thumbnail} alt={video.title} className="w-full h-56 object-cover lazyload" loading="lazy" />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{video.title}</h3>
                  <p className="text-sm text-gray-500">Click to {playingVideo === index ? "pause" : "play"}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Media;
