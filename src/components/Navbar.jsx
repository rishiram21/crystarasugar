import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

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

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-purple-700 font-bold" : "text-gray-700";
  };

  return (
    <nav className="bg-white shadow-md font-sans fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="px-10">
          <Link to="/" className="block" onClick={handleHomeClick}>
            <img src="/crystaralogo.jpg" alt="Crystara Logo" className="w-20 h-14" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl menu-button"
          onClick={(e) => {
            e.stopPropagation(); // Prevents event bubbling
            setMobileMenuOpen((prev) => !prev);
          }}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/about" className={`px-4 py-2 hover:text-purple-700 ${isActive("/about")}`}>
            About Us
          </Link>
          <Link to="/company-overview" className={`px-4 py-2 hover:text-purple-700 ${isActive("/company-overview")}`}>
            Company Overview
          </Link>
          <Link to="/products" className={`px-4 py-2 hover:text-purple-700 ${isActive("/products")}`}>
            Products
          </Link>
          <Link
            to="/media"
            className={`bg-gray-200 px-4 py-2 rounded-xl shadow-md hover:bg-purple-700 hover:text-white ${isActive("/media")}`}
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
            className="md:hidden bg-white shadow-md fixed top-16 left-0 w-full mobile-menu z-40"
          >
            <div className="flex flex-col items-center py-4 space-y-3">
              <Link to="/about" className={`w-full text-center py-2 hover:bg-gray-100 ${isActive("/about")}`} onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/company-overview" className={`w-full text-center py-2 hover:bg-gray-100 ${isActive("/company-overview")}`} onClick={() => setMobileMenuOpen(false)}>
                Company Overview
              </Link>
              <Link to="/products" className={`w-full text-center py-2 hover:bg-gray-100 ${isActive("/products")}`} onClick={() => setMobileMenuOpen(false)}>
                Products
              </Link>
              <Link
                to="/media"
                className={`w-full bg-gray-200 py-2 rounded-xl mx-4 text-center hover:bg-purple-700 hover:text-white ${isActive("/media")}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Media
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
