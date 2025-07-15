import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 text-purple-800">
      {/* Horizontal Line on Top */}
      <hr className="border-t-2 border-gray-300 mb-8" />

      <div className="container mx-auto px-6">

        {/* Logo & Tagline */}
        <div className="text-center mb-8">
          <img src="/crystaralogo.jpg" alt="Crystara Sugar" className="mx-auto w-24 h-auto" />
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
              <a href="https://www.facebook.com/share/176SXJZXF6/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a> */}

              <a href="https://www.instagram.com/crystarasugarpvt?utm_source=qr&igsh=MWU0cmZraGRmNmd1ZQ==" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/company/crystarasugarpvtltd/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>


          {/* About */}
          <div className="md:w-full">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-600">
              {/* <li><Link to="/profile" className="hover:text-purple-600">Profile</Link></li> */}
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
              <li><Link to="/contact" className="hover:text-purple-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="md:w-full">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600"><strong>Phone: </strong> +91 99234 08706 </p>
            <p className="text-gray-600"><strong>Email: </strong> contact@crystarasugar.com</p>
            <p className="text-gray-600">
              <strong>Address: </strong> 
              845, Gear's Imperium Rise, Hinjawadi Rajiv Gandhi Infotech Park, Near Wipro Circle, Hinjawadi Phase 2 ,Pune - 411057
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
