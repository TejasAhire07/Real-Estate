// // import React, { useState } from "react";
// // import { motion } from "framer-motion";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const handleNavClick = () => setMenuOpen(false);

// //   return (
// //     <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm">
// //       <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
// //         {/* 🔹 Logo */}
// //         <a
// //           href="#home"
// //           className="text-2xl font-bold text-blue-600"
// //           onClick={handleNavClick}
// //         >
// //           RealEstateCo
// //         </a>

// //         {/* 🔹 Desktop Menu */}
// //         <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
// //           <li>
// //             <a href="#home" className="hover:text-blue-600 transition">
// //               Home
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#about" className="hover:text-blue-600 transition">
// //               About
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#projects" className="hover:text-blue-600 transition">
// //               Projects
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#testimonials" className="hover:text-blue-600 transition">
// //               Testimonials
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#contact" className="hover:text-blue-600 transition">
// //               Contact
// //             </a>
// //           </li>
// //         </ul>

// //         {/* 🔹 Mobile Menu Button */}
// //         <div
// //           className="md:hidden cursor-pointer text-gray-800"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //         >
// //           {menuOpen ? (
// //             <span className="text-3xl">&times;</span>
// //           ) : (
// //             <span className="text-3xl">&#9776;</span>
// //           )}
// //         </div>
// //       </div>

// //       {/* 🔹 Mobile Menu */}
// //       {menuOpen && (
// //         <motion.ul
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="md:hidden bg-white shadow-md flex flex-col items-center py-6 space-y-4 font-medium text-gray-700"
// //         >
// //           <li>
// //             <a href="#Home" onClick={handleNavClick}>
// //               Home
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#About" onClick={handleNavClick}>
// //               About
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#Projects" onClick={handleNavClick}>
// //               Projects
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#Testimonails" onClick={handleNavClick}>
// //               Testimonials
// //             </a>
// //           </li>
// //           <li>
// //             <a href="#Contact" onClick={handleNavClick}>
// //               Contact
// //             </a>
// //           </li>
// //         </motion.ul>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [onHome, setOnHome] = useState(true);

//   // 🟢 Track scroll position and section
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setScrolled(scrollY > 50);

//       // detect if we’re still in the home section
//       const homeSection = document.getElementById("home");
//       if (homeSection) {
//         const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
//         setOnHome(scrollY < homeBottom - 100);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🔹 Close mobile menu
//   const handleNavClick = () => setMenuOpen(false);

//   // 🎨 Dynamic color scheme
//   const navbarStyle = onHome
//     ? scrolled
//       ? "bg-white/50 backdrop-blur-md text-white" // light transparent while scrolling on Home
//       : "bg-transparent text-white" // transparent at top of Home
//     : "bg-white/90 backdrop-blur-lg shadow-md text-gray-800"; // solid white on other sections

//   const textColor = onHome ? "text-white" : "text-gray-800";
//   const hoverColor = onHome ? "hover:text-blue-400" : "hover:text-blue-600";

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarStyle}`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
//         {/* 🔹 Logo */}
//         <motion.a
//           href="#Home"
//           whileHover={{ scale: 1.05 }}
//           className={`text-2xl font-extrabold tracking-tight ${textColor}`}
//           onClick={handleNavClick}
//         >
//           RealEstate<span className="text-blue-500">Co</span>
//         </motion.a>

//         {/* 🔹 Desktop Menu */}
//         <ul className={`hidden md:flex space-x-8 font-medium ${textColor}`}>
//           {["Home", "About", "Projects", "Testimonials", "Contact"].map((item) => (
//             <motion.li key={item} whileHover={{ y: -2 }}>
//               <a
//                 href={`#${item}`}
//                 className={`transition-colors duration-300 ${hoverColor}`}
//                 onClick={handleNavClick}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </a>
//             </motion.li>
//           ))}
//         </ul>

//         {/* 🔹 Desktop Button */}
//         <motion.a
//           href="#contact"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className={`hidden md:block px-5 py-2 rounded-full shadow-md transition-all ${
//             onHome
//               ? "bg-blue-500 hover:bg-blue-600 text-white"
//               : "bg-blue-600 hover:bg-blue-700 text-white"
//           }`}
//         >
//           Get Quote
//         </motion.a>

//         {/* 🔹 Mobile Menu Button */}
//         <motion.div
//           className={`md:hidden cursor-pointer ${textColor}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//           whileHover={{ scale: 1.1 }}
//         >
//           {menuOpen ? (
//             <motion.span
//               initial={{ rotate: 0 }}
//               animate={{ rotate: 90 }}
//               className="text-3xl"
//             >
//               ✕
//             </motion.span>
//           ) : (
//             <span className="text-3xl">&#9776;</span>
//           )}
//         </motion.div>
//       </div>

//       {/* 🔹 Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="border-r-8 md:hidden bg-white/95 backdrop-blur-md shadow-md flex flex-col items-center w-[350px] ml-28 py-7 space-y-7 font-medium text-gray-900"
//           >
//             {["Home", "About", "Projects", "Testimonails", "Contact"].map((item) => (
//               <motion.a
//                 key={item}
//                 href={`#${item}`}
//                 onClick={handleNavClick}
//                 whileHover={{ scale: 1.05, color: "#2563eb" }}
//                 className="transition-all duration-300"
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </motion.a>
//             ))}

//             <motion.a
//               href="#contact"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all"
//             >
//               Get Quote
//             </motion.a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        {/* 🔹 Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className={`text-2xl font-extrabold tracking-tight ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={handleNavClick}
        >
          RealEstate<span className="text-blue-600">Co</span>
        </motion.a>

        {/* 🔹 Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 font-medium ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {["Home", "About", "Projects", "Testimonials", "Contact"].map(
            (item) => (
              <motion.li key={item} whileHover={{ y: -2 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-300 ${
                    scrolled ? "hover:text-blue-600" : "hover:text-blue-400"
                  }`}
                  onClick={handleNavClick}
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>

        {/* 🔹 Login Button (Desktop) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center space-x-3"
        >
          <Link
            to="/login"
            className={`px-5 py-2 rounded-full font-semibold shadow-md transition-all ${
              scrolled
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            }`}
          >
            Login
          </Link>
        </motion.div>

        {/* 🔹 Mobile Menu Button */}
        <motion.div
          className={`md:hidden cursor-pointer ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
        >
          {menuOpen ? (
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              className="text-2xl bg-black text-white py-1 px-1 rounded"
            >
              Back
            </motion.span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </motion.div>
      </div>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center py-8 space-y-6 font-medium text-gray-900"
          >
            {["Home", "About", "Projects", "Testimonials", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleNavClick}
                  whileHover={{ scale: 1.05, color: "#2563eb" }}
                  className="transition-all duration-300"
                >
                  {item}
                </motion.a>
              )
            )}

            {/* 🔹 Mobile Login Button */}
            <Link
              to="/login"
              onClick={handleNavClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all"
            >
              Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
