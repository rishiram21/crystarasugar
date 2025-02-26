import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Close menu when clicking outside (for mobile)
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [mobileMenuOpen]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-md font-sans fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <div className="px-10">
          <a href="/" className="block" onClick={handleHomeClick}>
            <img src="/crystaralogo.jpeg" alt="Crystara Logo" className="w-50 h-14" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" className="px-4 py-2 text-gray-700 hover:text-purple-700" onClick={handleHomeClick}>
            Home
          </a>
          <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-purple-700">
            About Us
          </Link>
          <Link to="/company-overview" className="px-4 py-2 text-gray-700 hover:text-purple-700">
            Company Overview
          </Link>
          <Link to="/products" className="px-4 py-2 text-gray-700 hover:text-purple-700">
            Products
          </Link>
          <Link
            to="/media"
            className="bg-gray-200 px-4 py-2 rounded-xl shadow-md text-gray-700 hover:bg-purple-700 hover:text-white"
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
            className="md:hidden bg-white shadow-md mobile-menu-container"
          >
            <div className="flex flex-col items-center py-4 space-y-3">
              <a href="/about" className="w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </a>
              <a href="/company-overview" className="w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                Company Overview
              </a>
              <a href="/products" className="w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                Products
              </a>
              <a
                href="/media"
                className="w-full bg-gray-200 py-2 rounded-xl mx-4 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Media
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
