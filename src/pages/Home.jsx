import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


function Home() {
  // Animation Variants
  const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

  const fadeInText = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  //Overview
  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // Cards Data
  const stats = [
    { icon: "🌍", label: "1.Title here", value: "0000" },
    { icon: "👥", label: "2.Title here", value: "0000" },
    { icon: "🏢", label: "3.Title here", value: "0000" },
    { icon: "📦", label: "4.Title here", value: "0000" },
    { icon: "💼", label: "5.Title here", value: "0000" },
    { icon: "🚀", label: "6.Title here", value: "0000" },
  ];

  const cards = [
    {
      title: "Products",
      description: "Our commitment to sustainable business practices.",
      buttonText: "Find out more →",
      image: "/cards/card1.jpg",
      link: "/products",
    },
    {
      title: "Media",
      description: "Join our team and grow with us.",
      buttonText: "Explore Careers →",
      image: "/cards/card2.jpg",
      link: "/media",
    },
    {
      title: "Our Shareholders",
      description: "Building long-term value for our stakeholders.",
      buttonText: "Meet Shareholders →",
      image: "/cards/card3.jpg",
      link: "/shareholders",
    },
    {
      title: "What is Crystara",
      description: "Access reports, earnings, and financial data.",
      buttonText: "View Reports →",
      image: "/cards/card4.jpg",
      link: "/about",
    },
  ];


  //Graph
  const data = {
    labels: ["2023", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Production Growth (tons)",
        data: [50, 75, 100, 150, 200, 250, 300], // Adjust numbers as needed
        borderColor: "#6b46c1",
        backgroundColor: "rgba(107, 70, 193, 0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#6b46c1",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: true }, tooltip: { enabled: true } },
    scales: {
      x: { title: { display: true, text: "Year" } },
      y: { title: { display: true, text: "Production (tons)" }, beginAtZero: true },
    },
  };


  //Testimonials
  const testimonials = [
    {
      text: "Crystara Sugar's commitment to quality and innovation has transformed our supply chain. Their premium-grade sugar has set new standards in the industry.",
      author: "Rajesh Sharma",
      image: "/person1.jpg", 
    },
    {
      text: "The service and efficiency at Crystara Sugar are unparalleled. Our production process has improved significantly due to their timely deliveries.",
      author: "Meera Patel",
      image: "/person2.jpg",
    },
    {
      text: "Crystara's focus on sustainability and customer satisfaction makes them the best choice for businesses like ours. Highly recommended!",
      author: "Amit Verma",
      image: "/person3.jpg",
    },
  ];
  
  const settings = {
    dots:true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  //News
  const newsArticles = [
    {
      date: "22/02/2025",
      title: "Notice of 2025 half-year financial results",
      link: "#",
    },
    {
      date: "01/01/2025",
      title: "Bunge and Viterra statement on Canadian Competition Bureau report",
      link: "#",
    },
    {
      date: "11/08/2024",
      title: "Notice of 2024 full-year financial results",
      link: "#",
    },
    {
      date: "24/04/2024",
      title: "Notice of 2024 half-year financial results",
      link: "#",
    },
    {
      date: "14/08/2023",
      title: "Viterra receives first public environmental, social, and governance rating",
      link: "#",
    },
    {
      date: "20/02/2023",
      title: "Bunge and Viterra agree to create a premier diversified agribusiness company",
      link: "#",
    },
  ];
  
  const settings1 = {
    arrows:false,
    infinite: true,
    speed: 2000,
    autoplay: true,         // Enable auto-slide
    autoplaySpeed: 1500,    // Slide every 3 seconds
    slidesToShow: 3,        // Default: Show 3 slides on Desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,     // Below 768px (Mobile View)
        settings: {
          slidesToShow: 1,   // Show only 1 card in mobile view
          slidesToScroll: 1,
          autoplay: true,    // Auto-slide for mobile too
          autoplaySpeed: 3000,
        },
      },
    ],
  };  

  return (
    <div className="w-full overflow-hidden">
      {/* 🔹 Full-Width Image Slider */}
      <motion.div
      className="w-full h-screen sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen max-sm:h-[50vh] relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        className="w-full h-full"
      >
        {[...Array(14)].map((_, index) => (
          <SwiperSlide key={index} className="overflow-hidden">
            <motion.img
              src={`/imgslide${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>




      <div className="relative w-full min-h-screen">
  {/* Parallax Background */}
  <div className="fixed inset-0 -z-10">
    <img
      src="/sugarcane/sugarcane2.jpg"
      alt="Sugarcane Field"
      className="w-full h-full object-cover transform scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/60" />
  </div>

  {/* Main Content */}
  <div className="w-full max-w-7xl mx-auto pt-24 pb-32 px-4 sm:px-6 lg:px-8">
    <section className="w-full space-y-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold text-center text-white mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            About Crystara Sugar
          </span>
        </h2>
        <p className="text-center text-purple-100 text-xl max-w-2xl mx-auto">
          Crafting sweetness through sustainable innovation since 1995
        </p>
      </motion.div>

      {/* Video & Story Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Video Card */}
        <motion.div
          className="relative group"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
        >
          <div className="absolute inset-0 bg-purple-500/20 rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-all" />
          <video
            className="w-full h-96 object-cover rounded-3xl shadow-2xl relative transform group-hover:-translate-y-2 transition-all"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="aboutvideo.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Our Story Card */}
        <motion.div
          className="bg-white/95 p-8 rounded-3xl shadow-2xl border border-white/30"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-100 rounded-xl">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-purple-800">Our Legacy</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Established in 1995, Crystara Sugar has grown from a regional producer to an international leader 
            in premium sugar products. With over 2 million tons of annual production capacity, we combine 
            traditional farming wisdom with cutting-edge technology to deliver nature's purest sweetness.
          </p>
          <ul className="space-y-3 text-purple-900">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>ISO 9001 Certified Quality Management</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Serving 25+ countries worldwide</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>1,200+ dedicated employees</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-purple-800/90 p-8 rounded-3xl text-white shadow-2xl"
          variants={fadeInUp}
        >
          <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Sustainability First
          </h4>
          <p className="text-purple-100 leading-relaxed">
            We've reduced water consumption by 40% through closed-loop systems and recycle 95% of by-products 
            into renewable energy and animal feed.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/95 p-8 rounded-3xl shadow-2xl"
          variants={fadeInUp}
        >
          <h4 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-3">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Quality Assurance
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Every batch undergoes 27 quality checks using AI-powered inspection systems and blockchain 
            traceability from farm to table.
          </p>
        </motion.div>

        <motion.div
          className="bg-purple-600/90 p-8 rounded-3xl text-white shadow-2xl"
          variants={fadeInUp}
        >
          <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-8 h-8 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Community Impact
          </h4>
          <p className="text-purple-100 leading-relaxed">
            Empowering 15,000+ farmers through our Agri-Tech initiative, providing smart farming tools 
            and fair-trade partnerships.
          </p>
        </motion.div>
      </div>

      {/* Vision & Mission Section */}
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          className="bg-gradient-to-br from-purple-900 to-blue-900 p-8 rounded-3xl shadow-2xl text-white"
          variants={fadeInLeft}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/10 rounded-xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">Our Vision</h3>
          </div>
          <p className="text-lg leading-relaxed text-purple-100 mb-6">
            To redefine global sweetness by 2030 through carbon-neutral operations and AI-driven sustainable 
            agriculture. We envision a world where every sugar crystal tells a story of environmental stewardship 
            and social responsibility.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full" />
              <span>100% Renewable Energy by 2025</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full" />
              <span>Zero Waste Certification by 2026</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white/95 p-8 rounded-3xl shadow-2xl"
          variants={fadeInRight}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-100 rounded-xl">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-purple-800">Our Mission</h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            To continuously innovate in sustainable sugar production while maintaining the highest quality standards. 
            We commit to:
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center">
                01
              </div>
              <span>Developing 100% biodegradable packaging by 2024</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center">
                02
              </div>
              <span>Tripling farmer income through precision agriculture</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
</div>

<section className="relative w-full py-8 md:py-24">
  {/* Background Image and Overlay */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
  </div>

  {/* Content Container */}
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <motion.h2
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
        Company Overview
      </span>
    </motion.h2>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Text Content */}
      <motion.div
        className="bg-white/95 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInLeft}
      >
        <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-purple-700 mb-4 sm:mb-5 md:mb-6">
          Sharing Sweetness to the World
        </h3>
        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
          Welcome to Crystara Sugar Private Limited, where sweetness meets sustainability. 
          Established in 1995, we have grown into a global leader in premium sugar production, 
          serving over 25 countries with our commitment to quality and innovation.
        </p>
        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-8">
          Our journey began in the heart of India's sugarcane belt, and today, we proudly 
          produce over 2 million tons of sugar annually. With a focus on sustainable farming 
          practices and cutting-edge technology, we ensure that every grain of sugar reflects 
          our dedication to excellence.
        </p>
        <Link to="/company-overview">
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full flex items-center gap-2 transition-all text-sm sm:text-base">
            <span className="font-medium">Learn More</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </Link>
      </motion.div>

      {/* Stats Slider */}
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
      >
        <div className="w-full min-h-[250px] sm:min-h-[275px] md:min-h-[300px]">
          <Slider {...sliderSettings}>
            {stats.map((item, index) => (
              <div key={index} className="px-2">
                <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/30 text-center">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-purple-700 mb-2 sm:mb-3 md:mb-4">
                    {item.value}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg md:text-lg">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  </div>
</section>


{/* Cards Section with Background Image */}
<div className="relative w-full py-24 px-4 overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    
    <div className="absolute inset-0 bg-green-900/70" /> {/* Dark green overlay */}
  </div>

  <div className="relative max-w-7xl mx-auto">
    {/* Section Title */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-white mb-4">
        Our <span className="text-green-300">Operations</span>
      </h2>
      <p className="text-lg text-green-100 max-w-2xl mx-auto">
        Discover the different facets of our sustainable sugar production and global operations
      </p>
    </motion.div>

    {/* Cards Grid */}
    <div className="w-full flex justify-center mt-16 mb-16">
  <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {cards.map((card, index) => (
      <motion.div
        key={index}
        className="relative w-80 h-72 rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Background Image */}
        <img
          src={card.image}
          alt={card.title}
          className="absolute w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-opacity duration-300"></div>

        {/* Content */}
        <motion.div
          className="absolute bottom-4 left-4 text-white transition-transform duration-300 group-hover:translate-y-[-5px]"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-sm">{card.description}</p>

          {/* Button with React Router Link */}
          <Link
            to={card.link}
            className="mt-2 inline-block text-sm bg-white bg-opacity-20 hover:bg-opacity-40 px-3 py-1 rounded-md transition-colors duration-300"
          >
            {card.buttonText}
          </Link>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>

  </div>

  {/* Floating Leaves Animation */}
  {/* <div className="absolute inset-0 overflow-hidden">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -100, x: Math.random() * window.innerWidth }}
        animate={{
          y: window.innerHeight,
          x: Math.random() * 200 - 100,
          rotate: [0, 360],
        }}
        transition={{
          duration: 10 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5,
        }}
        className="absolute text-green-300/30"
        style={{
          fontSize: `${20 + Math.random() * 20}px`,
          left: `${Math.random() * 100}%`,
        }}
      >
        🍃
      </motion.div>
    ))}
  </div> */}
</div>

      {/* 🔹 Achievements Section (with time graph placeholder) */}
        <div className="w-full h-screen max-w-7xl mx-auto py-16 mt-12">
        <h2 className="text-4xl font-bold text-white mt-12 mb-12 text-center">Achievements</h2>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-gray-700 text-lg text-center">
            Over the years, Crystara Sugar has achieved remarkable milestones in the industry.
          </p>
          {/* 📊 Time Graph */}
          {/* 📊 Time Graph */}
          <div className="w-full h-96 bg-gray-100 rounded-lg mt-4 p-4 flex justify-center items-center">
            <Line data={data} options={options} />
          </div>
        </motion.div>
        </div>

      {/* 🔹 Testimonials Section */} 
      <div className="relative w-full h-auto max-w-7xl mx-auto py-16 mt-12">
        {/* Box Container */}
        <motion.div
          className="relative z-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold text-white mb-12">What Our Clients Say</h2>

          <div className="bg-gray-100 p-10 rounded-lg shadow-lg mx-auto w-3/4 md:w-2/3 lg:w-1/2">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  {/* Centered Image */}
                  <div className="flex justify-center items-center w-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-24 h-24 object-cover rounded-full border-4 border-purple-500 shadow-md"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 italic text-lg mt-6">"{testimonial.text}"</p>

                  {/* Author Name & Designation */}
                  <p className="font-bold text-purple-700 mt-4 text-lg">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.designation}</p>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>



      {/* 🔹 News & Blog Section */}
      <div className="w-full max-w-7xl mx-auto py-16 px-4">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-white mt-6 mb-4 text-center">
        Latest News
      </h2>

      {/* Read More Link */}
      <div className="text-green-600 font-semibold text-right mb-4 cursor-pointer">
        Read our articles →
      </div>

      {/* Slider for Desktop | Single Card for Mobile */}
      <Slider {...settings1}>
      {newsArticles.map((news, index) => (
        <div key={index} className="p-4">
          <div className="bg-gray-100 p-4 h-[180px] rounded-lg shadow-md flex flex-col justify-between">
            <p className="text-gray-500 text-sm">{news.date}</p>
            <h3 className="text-sm text-gray-800 mt-2 mb-2 line-clamp-2">
              {news.title}
            </h3>
            <a href={news.link} className="text-green-600 mt-2 inline-flex items-center">
              Read more →
            </a>
          </div>
        </div>
      ))}
    </Slider>

    </div>
    </div>
  );
}

export default Home;
