import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      name: "Brown Sugar",
      image: "/brown-sugar.jpg",
      description: "Brown sugar is refined sugar with molasses, giving it a moist texture and rich caramel-like flavor.",
      specs: [
        "Moisture Content: 3.5%",
        "Packaging: 500g, 1kg, 5kg",
        "Shelf Life: 18 months",
        "Certification: Organic Certified"
      ]
    },
    {
      name: "White Refined Sugar",
      image: "/white-sugar.jpg",
      description: "White sugar is a refined sweetener made from sugarcane or sugar beets, commonly used in cooking, and baking.",
      specs: [
        "Purity: 99.8%",
        "Packaging: 1kg, 5kg, 25kg",
        "Shelf Life: 2 years",
        "Certification: FSSAI, ISO 22000"
      ]
    },
    {
      name: "Banana",
      image: "/banana.jpg",
      description: "Fresh bananas are a rich source of essential nutrients, offering a naturally sweet taste and creamy texture.",
      specs: [
        "Moisture Content: 74-79%",
        "Packaging: 500g, 1kg, 5kg",
        "Shelf Life: 7-10 days",
        "Certification: Organic Certified"
      ]
    },
    {
      name: "S30 Sugar",
      image: "/s30-sugar.jpg",
      description: "S30 sugar is a medium-grade refined sugar with small, uniform crystals, commonly used in household.",
      specs: [
        "Moisture Content: 3.5%",
        "Packaging: 500g, 1kg, 5kg",
        "Shelf Life: 18 months",
        "Certification: Organic Certified"
      ]
    },
    {
      name: "Raw Sugar",
      image: "/raw-sugar.jpg",
      description: "Raw sugar is a minimally processed sugar derived from sugarcane, retaining some molasses for a golden hue.",
      specs: [
        "Moisture Content: Varies",
        "Packaging: 500g, 1kg, 5kg",
        "Shelf Life: 24 months",
        "Certification: Organic Certified"
      ]
    },
    {
      name: "M30 Sugar",
      image: "/m30-sugar.jpg",
      description: "M30 sugar is a refined white sugar with medium-sized crystals, commonly used in household and industrial applications.",
      specs: [
        "Moisture Content: 3.5%",
        "Packaging: 500g, 1kg, 5kg",
        "Shelf Life: 18 months",
        "Certification: Organic Certified"
      ]
    },
    {
      name: "Coming Soon",
      image: "/comingsoon.jpg",
      description: "",
      specs: [
        "Moisture Content: NA",
        "Packaging: NA",
        "Shelf Life: NA",
        "Certification: NA"
      ]
    },
    {
      name: "Coming Soon",
      image: "/comingsoon.jpg",
      description: "",
      specs: [
        "Moisture Content: NA",
        "Packaging: NA",
        "Shelf Life: NA",
        "Certification: NA"
      ]
    },
    {
      name: "Coming Soon",
      image: "/comingsoon.jpg",
      description: "",
      specs: [
        "Moisture Content: NA",
        "Packaging: NA",
        "Shelf Life: NA",
        "Certification: NA"
      ]
    },
    {
      name: "Coming Soon",
      image: "/comingsoon.jpg",
      description: "",
      specs: [
        "Moisture Content: NA",
        "Packaging: NA",
        "Shelf Life: NA",
        "Certification: NA"
      ]
    },
    {
      name: "Coming Soon",
      image: "/comingsoon.jpg",
      description: "",
      specs: [
        "Moisture Content: NA",
        "Packaging: NA",
        "Shelf Life: NA",
        "Certification: NA"
      ]
    },
    {
      name: "Coming Soon",
      image: "/comingsoon.jpg",
      description: "",
      specs: [
        "Moisture Content: NA",
        "Packaging: NA",
        "Shelf Life: NA",
        "Certification: NA"
      ]
    }
  ];

  const handleNavigation = (newDirection) => {
    setDirection(newDirection);
    let currentIndex = products.findIndex(p => p.name === selectedProduct.name);
    let newIndex = (currentIndex + newDirection + products.length) % products.length;

    // Skip "Coming Soon" products
    while (products[newIndex].name === "Coming Soon") {
      newIndex = (newIndex + newDirection + products.length) % products.length;
      if (newIndex === currentIndex) break; // Avoid infinite loop
    }

    setSelectedProduct(products[newIndex]);
  };

  return (
    <div className="relative min-h-screen py-12 px-4 md:px-20 bg-cover bg-center mt-12" style={{ backgroundImage: "url('/sugarcane/sugarcane1.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        {/* About Us Header */}
        <motion.div
          className="relative w-full h-48 flex items-center rounded-lg shadow-md mb-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/sugarcane/sugarcane2.jpg')" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative w-full flex flex-col items-center p-8 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-white">Our Products</h1>
          </div>
        </motion.div>

        {/* Product Grid with Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.5 },
            },
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="w-full h-64 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-50"
                />
              </div>

              <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-500">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Detail Overlay */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                key={selectedProduct.name}
                className="bg-white rounded-xl max-w-2xl w-full p-8 relative"
                initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <button
                  className="absolute top-4 right-4 text-2xl text-gray-600"
                  onClick={() => setSelectedProduct(null)}
                >
                  &times;
                </button>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="w-full h-64 overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-bold">Specifications:</h4>
                      <ul className="list-disc pl-6">
                        {selectedProduct.specs.map((spec, i) => (
                          <li key={i} className="text-gray-600">{spec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    className="text-purple-700 flex items-center"
                    onClick={() => handleNavigation(-1)}
                  >
                    <FaChevronLeft className="mr-2" /> Previous
                  </button>
                  <button
                    className="text-purple-700 flex items-center"
                    onClick={() => handleNavigation(1)}
                  >
                    Next <FaChevronRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Products;
