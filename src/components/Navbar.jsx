import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMobile, FaPhoneAlt } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (mobileMenuOpen && !e.target.closest(".mobile-menu") && !e.target.closest(".menu-button")) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-purple-700 font-bold" : "text-gray-700";
  };

  return (
    <>
      {/* Top Contact Bar - Hidden on very small screens */}
      <div className="bg-gray-100 py-2 font-sans shadow-sm">
        <div className="container mx-auto px-4">
          {/* Responsive layout for contact bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* Contact Information - Now side by side on all desktop views */}
            <div className="flex flex-row items-center space-x-4 text-sm mb-2 sm:mb-0">
              <div className="flex items-center">
                <FaPhoneAlt className="text-purple-700 mr-2 text-xs" />
                <span className="text-xs sm:text-sm">+91 99234 08706</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-purple-700 mr-2 text-xs" />
                <span className="text-xs sm:text-sm">contact@crystarasugar.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61575039993423" target="_blank" className="text-gray-600 hover:text-purple-700 transition-colors">
                <FaFacebook size={16} />
              </a>
              {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a> */}
              <a href="https://www.instagram.com/crystarasugarpvt?utm_source=qr&igsh=MWU0cmZraGRmNmd1ZQ==" target="_blank" className="text-gray-600 hover:text-purple-700 transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.linkedin.com/company/crystarasugarpvtltd/?originalSubdomain=in" target="_blank" className="text-gray-600 hover:text-purple-700 transition-colors">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    
      {/* Main Navbar */}
      <nav className="bg-white shadow-md font-sans sticky top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center mt-3">
            <Link to="/" className="block" onClick={handleHomeClick}>
              <img src="/crystaralogo.jpg" alt="Crystara Logo" className="h-16 sm:h-16 md:h-16 w-20" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-xl menu-button p-2 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation(); // Prevents event bubbling
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/" 
              className={`px-3 lg:px-4 py-2 mx-1 hover:text-purple-700 transition-colors ${isActive("/")}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 lg:px-4 py-2 mx-1 hover:text-purple-700 transition-colors ${isActive("/about")}`}
            >
              About Us
            </Link>
            <Link 
              to="/company-overview" 
              className={`px-3 lg:px-4 py-2 mx-1 hover:text-purple-700 transition-colors ${isActive("/company-overview")}`}
            >
              Company Overview
            </Link>
            <Link 
              to="/products" 
              className={`px-3 lg:px-4 py-2 mx-1 hover:text-purple-700 transition-colors ${isActive("/products")}`}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 lg:px-4 py-2 mx-1 hover:text-purple-700 transition-colors ${isActive("/contact")}`}
            >
              Contact Us
            </Link>
            <Link
              to="/media"
              className={`bg-gray-200 px-3 lg:px-5 py-2 mx-1 rounded-xl shadow-md hover:bg-purple-700 hover:text-white transition-colors ${isActive("/media")}`}
            >
              Media
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-md fixed top-16 left-0 w-full mobile-menu z-40 overflow-hidden"
            >
              <div className="flex flex-col py-2">
                <Link 
                  to="/" 
                  className={`px-6 py-3 hover:bg-gray-100 transition-colors ${isActive("/")}`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`px-6 py-3 hover:bg-gray-100 transition-colors ${isActive("/about")}`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/company-overview" 
                  className={`px-6 py-3 hover:bg-gray-100 transition-colors ${isActive("/company-overview")}`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Company Overview
                </Link>
                <Link 
                  to="/products" 
                  className={`px-6 py-3 hover:bg-gray-100 transition-colors ${isActive("/products")}`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  to="/contact" 
                  className={`px-6 py-3 hover:bg-gray-100 transition-colors ${isActive("/contact")}`} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="px-6 py-3">
                  <Link
                    to="/media"
                    className={`block bg-gray-200 py-2 px-4 rounded-xl text-center hover:bg-purple-700 hover:text-white transition-colors ${isActive("/media")}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Media
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;