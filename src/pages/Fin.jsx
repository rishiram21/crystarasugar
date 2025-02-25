// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const pdfFiles = [
//   { title: "Board of Directors", file: "sample1.pdf" },
//   { title: "Key Managerial Personnel", file: "sample2.pdf" },
//   { title: "Committee Board", file: "sample3.pdf" },
//   { title: "Financial Statements", file: "sample4.pdf" },
//   { title: "Annual Reports", file: "sample5.pdf" },
//   { title: "Stockholder Information", file: "sample6.pdf" },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// function Fin() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [selectedPDF, setSelectedPDF] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const pdfRef = useRef(null);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 500);
//   }, []);

//   useEffect(() => {
//     if (selectedPDF && pdfRef.current) {
//       pdfRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [selectedPDF]);

//   return (
//     <motion.div className="min-h-screen py-12" initial="hidden" animate="visible" variants={staggerContainer}>
//       <div className="container mx-auto px-6 md:px-20 py-8">

//         {/* Grid of PDF Sections */}
//         {loading ? (
//           <div className="text-center text-gray-500">Loading...</div>
//         ) : (
//           <motion.div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6" variants={staggerContainer}>
//             {pdfFiles.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className={`bg-white p-6 rounded-lg shadow-md text-center border-l-4 cursor-pointer transition-all duration-300 ${
//                   selectedPDF === item.file ? "border-purple-700 bg-purple-50" : "border-gray-300 hover:border-purple-700"
//                 }`}
//                 onClick={() => setSelectedPDF(selectedPDF === item.file ? null : item.file)}
//                 variants={fadeInUp}
//               >
//                 <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
//                 <p className="text-sm text-gray-500">{selectedPDF === item.file ? "Click to close" : "Click to view"}</p>
//                 <div className="flex justify-center mt-3">
//                   <img src="/pdf.jpg" alt="PDF Icon" className="w-8 h-8" />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {/* PDF Viewer Section */}
//         {selectedPDF && (
//           <motion.div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg" ref={pdfRef} variants={fadeInUp}>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold text-gray-900">{selectedPDF.replace("_", " ").toUpperCase()}</h2>
//               <button 
//                 onClick={() => setSelectedPDF(null)}
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
//               >
//                 ✖ Close
//               </button>
//             </div>
            
//             {/* Responsive PDF Viewer */}
//             <div className="w-full h-[500px] md:h-[600px] sm:h-[400px] overflow-auto">
//               <iframe 
//                 src={`/${selectedPDF}`} 
//                 className="w-full h-full border rounded-md"
//               />
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-4 text-center flex flex-col sm:flex-row gap-4">
//               <Link to={`/${selectedPDF}`} target="_blank" className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
//                 Open in New Tab 🔗
//               </Link>
//               <a href={`/${selectedPDF}`} download className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
//                 Download ⬇
//               </a>
//             </div>
//           </motion.div>
//         )}

//       </div>
//     </motion.div>
//   );
// }

// export default Fin;
