import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Package, Globe, Star, Award, Clock, Shield } from "lucide-react";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [direction, setDirection] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation configurations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const exportProducts = [
  {
    name: "S30 Sugar",
    image: "/products/s30-sugar.jpg",
    description: "S30 white refined sugar is a medium-grade granular sugar with crystal size of 0.8 to 1.2mm, ideal for daily use and table consumption.",
    specs: [
      "ICUMSA: 80–150",
      "Color: Sparkling White / Crystal White",
      "Crystal Size: 0.8 – 1.2mm",
      "Form: Granular",
      "Moisture: 0.4% – 0.6%",
      "Solubility: 100% dry free fine flowing",
      "Polarization: 99.80% min",
      "Ash: 0.04% – 0.6%",
      "Reducing Sugar: 0.05% max",
      "Radiation: Within international limit",
      "SO2: 70mg/kg",
      "Smell: Fresh",
      "Purity: 99.9%",
      "Shelf Life: 2–3 Years",
      "Processing Type: Refined",
      "Primary Ingredient: Cane Sugar",
      "Supply Ability: 50,000 MT/week",
      "Minimum Order: 1000 MT",
      "Country of Origin: India"
    ],
    category: "export",
    featured: true
  },
  {
    name: "M30 Sugar",
    image: "/products/m30-sugar.jpg",
    description: "M30 white refined sugar is a high-quality granular sugar with larger crystal size (1.4 to 1.7mm), suitable for both household and industrial applications.",
    specs: [
      "ICUMSA: 80–150",
      "Color: Sparkling White / Crystal White",
      "Crystal Size: 1.4 – 1.7mm",
      "Form: Granular",
      "Moisture: 0.4% – 0.6%",
      "Solubility: 100% dry free fine flowing",
      "Polarization: 99.80% min",
      "Ash: 0.04% – 0.6%",
      "Reducing Sugar: 0.05% max",
      "Radiation: Within international limit",
      "SO2: 70mg/kg",
      "Smell: Fresh",
      "Purity: 99.9%",
      "Shelf Life: 2–3 Years",
      "Processing Type: Refined",
      "Primary Ingredient: Cane Sugar",
      "Supply Ability: 50,000 MT/week",
      "Minimum Order: 1000 MT",
      "Country of Origin: India"
    ],
    category: "export",
    featured: false
  },
  {
    name: "ICUMSA 45 Sugar",
    image: "/products/white-sugar.jpg",
    description: "ICUMSA 45 is a premium refined white sugar with superior purity and brightness, widely used in the food and beverage industry.",
    specs: [
      "ICUMSA: 45",
      "Color: Sparkling White / Crystal White",
      "Crystal Size: 0.8 – 1.2mm",
      "Form: Granular",
      "Moisture: 0.4% – 0.6%",
      "Solubility: 100% dry free fine flowing",
      "Polarization: 99.80% min",
      "Ash: 0.04% – 0.6%",
      "Reducing Sugar: 0.05% max",
      "Radiation: Within international limit",
      "SO2: 70mg/kg",
      "Smell: Fresh",
      "Purity: 99.9%",
      "Shelf Life: 2–3 Years",
      "Processing Type: Refined",
      "Primary Ingredient: Cane Sugar",
      "Supply Ability: 50,000 MT/week",
      "Minimum Order: 1000 MT",
      "Country of Origin: India"
    ],
    category: "export",
    featured: true
  },
  {
    name: "Raw Sugar",
    image: "/products/raw-sugar.jpg",
    description: "Indian Raw Sugar is semi-processed brown sugar with high molasses content, widely used in industrial applications and traditional cooking.",
    specs: [
      "ICUMSA: 600–1200",
      "Color: Brown",
      "Polarization: 96.00% Min (up to 99.20%)",
      "Ash Content: 0.15% Max",
      "Crystal Size: ~0.6mm",
      "Form: Small Crystal",
      "Moisture: 0.15% Max",
      "Solubility: 90% free flowing",
      "Granulation: Fine",
      "SO2: 20 PPM",
      "Smell: Fresh",
      "Reducing Sugar: 0.05% max",
      "Magnetic Particles: 10mg/kg",
      "AS: 1 PPM | PS: 2 PPM | CU: 3 PPM",
      "HPN staph aureus: Nil",
      "Free from mold, unnatural odors, insects",
      "Radiation: Within acceptable limits",
      "Phytosanitary Certified",
      "Shelf Life: 2–3 Years",
      "Processing Type: Raw",
      "Primary Ingredient: Cane Sugar",
      "Supply Ability: 50,000 MT/week",
      "Minimum Order: 1000 MT",
      "Country of Origin: India"
    ],
    category: "export",
    featured: false
  },
    {
      name: "G9 Cavendish Banana",
      image: "/products/banana.jpg",
      description: "Rich in Vitamin B6 and Vitamin C- helps to reduce your fatigue and provides instant energy Bananas are rich in fiber and potassium. Eating a banana in the morning prevents acidity. It also helps in generating happy hormone and serves as the brain tonic.",
      specs: [
        "Origin of Banana: Tembhurni, Jalgaon, Chalisgaon, Barwani, Raver",
        "Packaging: Corrugated Top Bottom - Premium, Vacuum Bag with foam separators",
        "Gross Weight 14.5 kg For Iran & Saudi Arabia, 14  kg for Dubai and Iraq",
        "Net Weight 13.5 kg For Iran & Saudi Arabia, 13 kg for Dubai and Iraq",
        "Recyclable: Yes",
        "Units per carton: 4 / 5 / 6 / 8 / Clusters",
        "Number of fingers per hand Minimum 12",
        "Calibration: 39 - 46",
      ],
      category: "export",
      featured: true
    }
  ];

  const importProducts = [
    {
      name: "Apple",
      image: "/products/apple.jpg",
      description: "Fresh apples are crisp and juicy fruits rich in fiber and antioxidants, with a perfect balance of sweetness and acidity.",
      specs: [
        "Variety: Royal Gala, Honeycrisp, Granny Smith",
        "Packaging: 1kg, 5kg",
        "Shelf Life: 2-4 weeks (refrigerated)",
        "Certification: Global GAP"
      ],
      category: "import",
      featured: true
    },
    {
      name: "Kiwi",
      image: "/products/kiwi.jpg",
      description: "Kiwi fruits are vibrant green with tiny black seeds, offering a unique sweet-tart flavor and exceptional vitamin C content.",
      specs: [
        "Variety: Hayward, Gold",
        "Packaging: 500g, 1kg",
        "Shelf Life: 2-3 weeks (refrigerated)",
        "Certification: Organic Certified"
      ],
      category: "import",
      featured: false
    }
  ];

  const allProducts = [...exportProducts, ...importProducts];

  const filteredProducts = activeFilter === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === activeFilter);

  const handleNavigation = (newDirection) => {
    setDirection(newDirection);
    let currentIndex = allProducts.findIndex(p => p.name === selectedProduct.name);
    let newIndex = (currentIndex + newDirection + allProducts.length) % allProducts.length;
    setSelectedProduct(allProducts[newIndex]);
  };

  const getSpecIcon = (spec) => {
    if (spec.toLowerCase().includes('moisture') || spec.toLowerCase().includes('purity')) return <Shield className="w-4 h-4" />;
    if (spec.toLowerCase().includes('packaging')) return <Package className="w-4 h-4" />;
    if (spec.toLowerCase().includes('shelf') || spec.toLowerCase().includes('life')) return <Clock className="w-4 h-4" />;
    if (spec.toLowerCase().includes('certification')) return <Award className="w-4 h-4" />;
    return <Star className="w-4 h-4" />;
  };

  const ProductCard = ({ product, index }) => (
    <motion.div
      className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden cursor-pointer group h-80 hover:bg-white/20 transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setSelectedProduct(product)}
    >
      {/* {product.featured && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
          Featured
        </div>
      )} */}
      
      <div className="relative h-44 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
          {product.name}
        </h3>
        <p className="text-purple-100 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-purple-200 text-xs uppercase tracking-wider">
            {product.category}
          </span>
          <div className="flex items-center text-purple-200">
            <span className="text-xs mr-1">View Details</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-purple-900 px-4 md:px-20">
      <div className="container mx-auto py-8">
      {/* Hero Section */}
      <motion.div
          className="relative w-full h-36 md:h-48 flex items-center rounded-lg shadow-md mb-2 bg-cover bg-center"
          style={{ backgroundImage: "url('/banner/productimg.jpg')" }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative w-full flex flex-col items-center p-8 text-center">
            <h1 className="text-xl md:text-5xl font-bold text-white">Our Products</h1>
            {/* <p className="text-white mt-2">Sweetening Lives Since 2017</p> */}
          </div>
        </motion.div>

      <div className="container mx-auto px-4 py-16">
        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 flex space-x-2">
            {[
              { key: "all", label: "All Products", icon: <Globe className="w-4 h-4" /> },
              { key: "export", label: "Exports", icon: <Package className="w-4 h-4" /> },
              { key: "import", label: "Imports", icon: <Package className="w-4 h-4" /> }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  activeFilter === filter.key
                    ? "bg-white text-purple-700 shadow-lg"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {filter.icon}
                <span className="font-medium">{filter.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">{allProducts.length}+</div>
              <div className="text-purple-200">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-200">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-purple-200">Quality</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-200">Support</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProduct(null);
              }
            }}
          >
            <motion.div
              key={selectedProduct.name}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="relative h-80 rounded-2xl overflow-hidden">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                      {/* {selectedProduct.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured Product
                        </div>
                      )} */}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium uppercase">
                          {selectedProduct.category}
                        </span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {selectedProduct.name}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {selectedProduct.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <Package className="w-5 h-5 text-purple-600" />
                        Specifications
                      </h4>
                      <div className="space-y-3">
                        {selectedProduct.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="text-purple-600">
                              {getSpecIcon(spec)}
                            </div>
                            <span className="text-gray-700 font-medium">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-200 gap-4">
                  <button
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    onClick={() => handleNavigation(-1)}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous Product
                  </button>
                  
                  {/* <div className="flex gap-3">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                      Request Quote
                    </button>
                    <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
                      Contact Us
                    </button>
                  </div>
                   */}
                  <button
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    onClick={() => handleNavigation(1)}
                  >
                    Next Product
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
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