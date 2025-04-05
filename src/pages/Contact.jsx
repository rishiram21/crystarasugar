import { useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation configurations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });
  };

  return (
    <div className="min-h-screen py-12 bg-purple-50">
      <div className="container mx-auto px-6 md:px-20 py-8">

        {/* Hero Section */}
        <motion.div
          className="relative w-full h-48 flex items-center rounded-lg shadow-md mb-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact-bg.jpg')" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative w-full flex flex-col items-center p-8 text-center">
            <h1 className="text-xl md:text-5xl font-bold text-white">Contact Us</h1>
            <p className="text-white mt-2">Get in Touch with Our Team</p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700">Iran Office</h2>
            <p className="text-gray-600 leading-relaxed">
              Address: 123 Iran Street, Tehran, Iran
            </p>
            <p className="text-gray-600 leading-relaxed">
              Phone: +98 123 456 7890
            </p>
            <p className="text-gray-600 leading-relaxed">
              Email: iran@crystarasugar.com
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700">Turkey Office</h2>
            <p className="text-gray-600 leading-relaxed">
              Address: 456 Turkey Avenue, Istanbul, Turkey
            </p>
            <p className="text-gray-600 leading-relaxed">
              Phone: +90 123 456 7890
            </p>
            <p className="text-gray-600 leading-relaxed">
              Email: turkey@crystarasugar.com
            </p>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">Our Locations</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d51.38906531544279!3d35.69973978021678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00496ff8e451%3A0x12b52f19f8f0095f!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sin!4v1633939746696!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">Get in Touch</h2>
          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea name="message" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"></textarea>
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
