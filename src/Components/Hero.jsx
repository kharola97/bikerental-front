// import bike from "../assets/bike2.jpg";
// import LocationSearch from "../Components/LocationSearch";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function Hero() {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
//   const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

//   return (
//     <section ref={sectionRef} className="pt-8">
//       <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//         <motion.div
//           className="max-w-2xl text-center md:text-left mx-auto"
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900 dark:text-slate-100">
//             Find & Rent Bikes Near You
//           </h1>
//           <p className="mb-6 text-gray-700 dark:text-gray-300">
//             Discover and book rental bikes from local shops in your area. Choose from city-friendly scooters to touring-ready motorcycles.
//           </p>
//           <div className="flex flex-col sm:flex-row pt-2 gap-3 w-full max-w-xl md:max-w-none">
//             <div className="flex-1">
//               <LocationSearch />
//             </div>
//             <button className="h-[42px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white px-4 rounded cursor-pointer">
//               Explore Bikes
//             </button>
//           </div>
//           <div className="mt-4 flex gap-6 text-sm text-gray-600 dark:text-gray-300 justify-center md:justify-start">
//             <div>No deposit on select bikes</div>
//             <div>Free cancellations up to 24h</div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="flex justify-center items-center"
//           initial={{ opacity: 0, scale: 0.96 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
//         >
//           <motion.img
//             src={bike}
//             alt="Bike and Map"
//             className="w-full max-h-[500px] rounded-xl object-cover shadow"
//             style={{ y, scale }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import bike from "../assets/bike2.jpg";
import LocationSearch from "../Components/LocationSearch";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";

// Splitting the heading into words for word-by-word animation
const headingText = "Find & Rent Bikes Near You";
const headingWords = headingText.split(" ");

// Paragraph text for character-by-character animation
const paragraphText = "Discover and book rental bikes from local shops in your area. Choose from city-friendly scooters to touring-ready motorcycles.";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={sectionRef} className="pt-8">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <motion.div
          className="max-w-2xl text-center md:text-left mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-600 dark:text-slate-100 overflow-hidden">
            {/* Animate each word with a slight delay */}
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "backOut"
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          {/* Typing effect for paragraph */}
          <motion.p 
            className="mb-6 text-gray-700 dark:text-gray-300 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: headingWords.length * 0.1 + 0.3 }}
          >
            <AnimatePresence>
              {paragraphText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.05,
                    delay: headingWords.length * 0.1 + 0.3 + i * 0.02
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </AnimatePresence>
          </motion.p>

          <div className="flex flex-col sm:flex-row pt-2 gap-3 w-full max-w-xl md:max-w-none">
            <div className="flex-1">
              <LocationSearch />
            </div>
            <motion.button 
              className="h-[42px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white px-4 rounded cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: headingWords.length * 0.1 + 0.3 + paragraphText.length * 0.02 + 0.2 }}
            >
              Explore Bikes
            </motion.button>
          </div>
          
          <motion.div 
            className="mt-4 flex gap-6 text-sm text-gray-600 dark:text-gray-300 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: headingWords.length * 0.1 + 0.3 + paragraphText.length * 0.02 + 0.4 }}
          >
            <div>No deposit on select bikes</div>
            <div>Free cancellations up to 24h</div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <motion.img
            src={bike}
            alt="Bike and Map"
            className="w-full max-h-[500px] rounded-xl object-cover shadow"
            style={{ y, scale }}
          />
        </motion.div>
      </div>
    </section>
  );
}