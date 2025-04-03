import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-purple-800">
      {/* Horizontal Line on Top */}
      <hr className="border-t-2 border-gray-300 mb-8" />

      <div className="container mx-auto px-6">

        {/* Logo & Tagline */}
        <div className="text-center mb-8">
          <img src="/crlogo.jpg" alt="Crystara Sugar" className="mx-auto w-24 h-auto" />
          <h2 className="text-xl font-semibold mt-2">Crystara Sugar Pvt Ltd</h2>
          <p className="text-sm text-gray-600">
            A Leading Manufacturer Committed to Quality & Sustainability
          </p>
        </div>
        <hr className="border-t-2 border-gray-300 mb-8" />

        {/* Footer Links in the Same Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

          {/* Social Media Links */}
          <div className="md:w-full">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/company/crystarasugarpvtltd/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                <Linkedin size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                <Twitter size={24} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="md:w-full">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/profile" className="hover:text-purple-600">Profile</Link></li>
              <li><Link to="/about" className="hover:text-purple-600">Crystara Sugar Pvt Ltd</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:w-full">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/"
                  className="hover:text-purple-600"
                  onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                >
                  Home
                </Link>
              </li>
              <li><Link to="/about" className="hover:text-purple-600">About</Link></li>
              <li><Link to="/company-overview" className="hover:text-purple-600">Company Overview</Link></li>
              <li><Link to="/products" className="hover:text-purple-600">Products</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="md:w-full">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600"><strong>Phone:</strong> +91 98604 33364</p>
            <p className="text-gray-600"><strong>Email:</strong> crystarasugar@gmail.com</p>
            <p className="text-gray-600">
              <strong>Address:</strong> 845, Gear's Imperium Rise, Biotech Park, Hinjewadi, Pune 411 057
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="w-full border-t bg-purple-300 border-gray-300 pt-2 pb-2 text-center text-sm text-gray-600 mt-4">
        <p>© {new Date().getFullYear()} Crystara Sugar Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;