// import { useEffect } from "react";
// import { motion } from "framer-motion";

// function Offering() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Animation for fade-in effect
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   // Product Listings (Added 3 More)
//   const products = [
//     {
//       name: "White Sugar",
//       image: "/white-sugar.jpg",
//       description: "White sugar is a refined sweetener made from sugarcane or sugar beets, commonly used in cooking, baking, and beverages."
//     },
//     {
//       name: "Brown Sugar",
//       image: "/brown-sugar.jpg",
//       description: "Brown sugar is refined sugar with molasses, giving it a moist texture and rich caramel-like flavor."
//     },
//     {
//       name: "Jaggery",
//       image: "/jaggery.jpg",
//       description: "Jaggery is an unrefined natural sweetener made from sugarcane or palm sap, rich in minerals and a deep caramel flavor."
//     },
//     {
//       name: "s30 Sugar",
//       image: "/s30-sugar.jpg",
//       description: "S30 sugar is a medium-grade refined sugar with small, uniform crystals, commonly used in household and industrial applications."
//     },
//     {
//       name: "Raw Sugar",
//       image: "/raw-sugar.jpg",
//       description: "Raw sugar is minimally processed sugar with a golden color and coarse crystals, some molasses for a mild caramel flavor."
//     },
//     {
//       name: "m30 Sugar",
//       image: "/m30-sugar.jpg",
//       description: "M30 sugar is a refined white sugar with medium-sized crystals, commonly used in household and industrial applications."
//     }
//   ];

//   return (
//     <div className="bg-purple min-h-screen py-12">
//       <div className="container mx-auto px-6 md:px-20 py-8">
        
//         {/* Hero Section */}
//         <motion.div
//           className="relative w-full h-48 flex items-center rounded-lg shadow-md mb-8 bg-cover bg-center"
//           style={{ backgroundImage: "url('/offeringimg.jpg')" }}
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
//           <div className="relative w-full flex flex-col items-center p-8 text-center">
//             <h1 className="text-2xl md:text-5xl font-bold text-white">Our Offering</h1>
//           </div>
//         </motion.div>

//         {/* Products Section in Grid Layout with Hover Effect */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {products.map((product, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group"
//               whileHover={{ scale: 1.05 }}
//             >
//               {/* Product Image */}
//               <img 
//                 src={product.image} 
//                 alt={product.name} 
//                 className="w-full h-64 object-cover transition-all duration-500 group-hover:opacity-50"
//               />

//               {/* Product Name */}
//               <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-500">
//                 {product.name}
//               </h3>

//               {/* Hidden Description (Shows on Hover) */}
//               <div className="absolute inset-0 flex items-center justify-center text-center p-4 text-white bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500">
//                 <p className="text-sm">{product.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </div>
//   );
// }

// export default Offering;
