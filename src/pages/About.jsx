import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define motion variants if not already defined
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

// Circular Progress Component for Static Values
const CircularProgress = ({ value, label }) => {
  const circumference = 2 * Math.PI * 50;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg className="w-24 h-24 md:w-32 md:h-32 transform rotate-90">
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
            className="text-xl md:text-2xl font-bold fill-purple-700"
            transform="rotate(-90 64 64)"
          >
            {value}%
          </text>
        </svg>
      </div>
      <p className="mt-4 text-base md:text-lg font-medium text-gray-700">{label}</p>
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
        <svg className="w-24 h-24 md:w-32 md:h-32 transform rotate-90">
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
            className="text-xl md:text-2xl font-bold fill-purple-700"
            transform="rotate(-90 64 64)"
          >
            {count}+
          </text>
        </svg>
      </div>
      <p className="mt-4 text-base md:text-lg font-medium text-gray-700">{label}</p>
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
            <h1 className="text-xl md:text-5xl font-bold text-white">About Us</h1>
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
          <CircularProgressNumber target={8} label="Years of Experience" />
          <CircularProgress value={100} label="Product Quality" />
        </motion.div>

        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Vision Card - Left Animation */}
          <motion.div
            className="bg-gradient-to-br from-purple-900 to-blue-900 p-8 rounded-3xl shadow-2xl text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="p-3 bg-white/10 rounded-xl"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </motion.div>
              <h3 className="text-xl md:text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-purple-100 mb-6">
              To redefine global sweetness by 2030 through carbon-neutral operations and AI-driven sustainable
              agriculture. We envision a world where every sugar crystal tells a story of environmental stewardship
              and social responsibility.
            </p>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="w-3 h-3 bg-purple-400 rounded-full" />
                <span>100% Renewable Energy by 2025</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="w-3 h-3 bg-purple-400 rounded-full" />
                <span>Zero Waste Certification by 2026</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mission Card - Right Animation */}
          <motion.div
            className="bg-white/95 p-8 rounded-3xl shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="p-3 bg-purple-100 rounded-xl"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(167, 139, 250, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <h3 className="text-xl md:text-3xl font-bold text-purple-800">Our Mission</h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
              To continuously innovate in sustainable sugar production while maintaining the highest quality standards.
              We commit to:
            </p>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(233, 213, 255, 0.5)" }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center">
                  01
                </div>
                <span>Developing 100% biodegradable packaging by 2024</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(233, 213, 255, 0.5)" }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center">
                  02
                </div>
                <span>Tripling farmer income through precision agriculture</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Rest of the component... */}
        {[
          {
            title: "Who We Are",
            description: "Started as a small local producer, we have expanded our operations to meet international demand. With a commitment to excellence, we continuously evolve with market trends and emerging technologies.",
            subpoints: [
              "Founded on the principles of quality and excellence.",
              "Committed to delivering the finest sugar products.",
              "Dedicated to customer satisfaction and innovation."
            ],
            "image": "/aboutimg1.jpg",
            "reverse": false
          },  
          {
            title: "Our Journey",
            description: "Starting as a small local producer, we have expanded our operations to meet international demand. With a forward-thinking approach, we continuously evolve by adapting to market trends and emerging technologies.",
            subpoints: [
              "Started as a small local producer.",
              "Expanded operations to meet international demand.",
              "Continuously evolving with market trends and technologies."
            ],
            "image": "/aboutimg2.jpg",
            "reverse": true
          },  
          {
            title: "Our Core Values",
            description: "We uphold principles that drive sustainability, innovation, and ethical business practices.",
            subpoints: [
              "Sustainable practices",
              "Eco-friendly approach",
              "Research investment",
              "Product innovation",
              "Ethical business",
              "Community engagement"
            ],
            "image": "/aboutimg3.jpg",
            "reverse": false
          }
        ].map((section, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white p-6 shadow-md ${
              section.reverse ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Image Section */}
            <motion.div className="flex justify-center items-start">
              <img src={section.image} alt={section.title} className="rounded-lg shadow-lg w-full md:w-3/4" />
            </motion.div>

            {/* Text Section */}
            <motion.div className="text-left md:text-left">
              <h2 className="text-xl md:text-2xl font-semibold text-purple-700 mb-4">{section.title}</h2>
              <div className="text-gray-600 text-base md:text-lg mb-4" dangerouslySetInnerHTML={{ __html: section.description }}></div>
              <ul className="list-disc pl-6 text-gray-600 text-base md:text-lg">
                {section.subpoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default About;