import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Circular Progress Component for Static Values
const CircularProgress = ({ value, label }) => {
  const circumference = 2 * Math.PI * 50;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg className="w-32 h-32 transform rotate-90">
          {/* Background Circle */}
          <circle cx="64" cy="64" r="50" stroke="#E5E7EB" strokeWidth="8" fill="none" />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="64"
            cy="64"
            r="50"
            stroke="#7C3AED"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          {/* Centered Text */}
          <text
            x="64"
            y="64"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-2xl font-bold fill-purple-700"
            transform="rotate(-90 64 64)"
          >
            {value}%
          </text>
        </svg>
      </div>
      <p className="mt-4 text-lg font-medium text-gray-700">{label}</p>
    </div>
  );
};

// Circular Progress Component for Dynamic Counting Number
const CircularProgressNumber = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startCount = 0;
    const duration = 2000;
    const interval = 40;
    const steps = duration / interval;
    const increment = target / steps;

    const timer = setInterval(() => {
      startCount += increment;
      if (startCount >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startCount));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target]);

  const circumference = 2 * Math.PI * 50;
  const offset = circumference - (count / target) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg className="w-32 h-32 transform rotate-90">
          {/* Background Circle */}
          <circle cx="64" cy="64" r="50" stroke="#E5E7EB" strokeWidth="8" fill="none" />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="64"
            cy="64"
            r="50"
            stroke="#7C3AED"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          {/* Centered Text */}
          <text
            x="64"
            y="64"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-2xl font-bold fill-purple-700"
            transform="rotate(-90 64 64)"
          >
            {count}+
          </text>
        </svg>
      </div>
      <p className="mt-4 text-lg font-medium text-gray-700">{label}</p>
    </div>
  );
};

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-purple-50 min-h-screen py-12 px-4 md:px-20">
      <div className="container mx-auto py-8">
        
        {/* About Us Header */}
        <motion.div
          className="relative w-full h-48 flex items-center rounded-lg shadow-md mb-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/aboutimg.jpg')" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative w-full flex flex-col items-center p-8 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-white">About Us</h1>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-12 mb-12 px-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <CircularProgress value={85} label="Client Satisfaction" />
          <CircularProgressNumber target={5} label="Years of Experience" />
          <CircularProgress value={100} label="Product Quality" />
        </motion.div>

        {/* About Sections */}
        {[
          {
            title: "Who We Are",
            description: "Crystara Sugar Pvt Ltd is a leading manufacturer in the sugar industry.",
            image: "/aboutimg1.jpg",
            reverse: false
          },
          {
            title: "Our Journey",
            description: "Established over 20 years ago, Crystara Sugar has grown into a global supplier.",
            image: "/aboutimg2.jpg",
            reverse: true
          },
          {
            title: "Our Core Values",
            description: "<ul class='list-disc pl-6'><li><strong>Quality:</strong> Premium sugar products.</li><li><strong>Innovation:</strong> Industry-leading solutions.</li><li><strong>Sustainability:</strong> Eco-friendly processes.</li></ul>",
            image: "/aboutimg3.jpg",
            reverse: false
          },
          {
            title: "Our Mission & Vision",
            description: "Our mission is to provide high-quality sugar products while maintaining eco-friendly production processes.",
            image: "/aboutimg4.jpg",
            reverse: true
          }
        ].map((section, index) => (
          <motion.div 
            key={index} 
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 shadow-md ${
              section.reverse ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Image Section */}
            <motion.div className="flex justify-center">
              <img src={section.image} alt={section.title} className="rounded-lg shadow-lg w-full md:w-3/4" />
            </motion.div>

            {/* Text Section */}
            <motion.div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">{section.title}</h2>
              <p className="text-gray-600 text-lg" dangerouslySetInnerHTML={{ __html: section.description }}></p>
            </motion.div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default About;
