import { useEffect } from "react";
import { motion } from "framer-motion";

function CompanyOverview() {
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

  return (
    <div className="min-h-screen bg-purple-50">
      <div className="container mx-auto px-6 md:px-20 py-8">

        {/* Hero Section */}
        <motion.div
          className="relative w-full h-48 flex items-center rounded-lg shadow-md mb-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/sugarcane/sugarcane1.jpg')" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative w-full flex flex-col items-center p-8 text-center">
            <h1 className="text-xl md:text-5xl font-bold text-white">Company Overview</h1>
            <p className="text-white mt-2">Sweetening Lives Since 2017</p>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          {/* About Section */}
          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Crystara Sugar Pvt Ltd has been a cornerstone of the sugar industry for nearly three decades.
              Founded with a vision to revolutionize sweetener production, we've grown from a modest local
              operation to a nationally recognized leader in sugar manufacturing and distribution.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to sustainable practices and technological innovation has allowed us to
              consistently deliver premium quality products while maintaining environmental stewardship
              and community development at our core.
            </p>
          </motion.div>

         {/* Milestones */}
<motion.div variants={fadeIn} className="space-y-6">
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Milestones</h3>
    <ul className="space-y-3">
      <li className="flex items-center">
        <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
        <span className="text-gray-600">2020: International Office Establishment</span>
      </li>
      <li className="flex items-center">
        <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
        <span className="text-gray-600">2023: Expand International</span>
      </li>
      <li className="flex items-center">
        <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
        <span className="text-gray-600">2023: Sustainability</span>
      </li>
      
    </ul>
  </div>
</motion.div>

        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: "Annual Production", value: "500,000+", unit: "Tonnes" },
            { title: "Happy Clients", value: "2500+", unit: "Worldwide" },
            { title: "Team Members", value: "250+", unit: "Professionals" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="text-2xl md:text-4xl font-bold text-purple-700 mb-2">{stat.value}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">{stat.title}</h3>
              <p className="text-gray-500 mt-1">{stat.unit}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default CompanyOverview;
