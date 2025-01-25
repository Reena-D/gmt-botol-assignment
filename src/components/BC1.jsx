import { motion } from "framer-motion";

export default function BC1() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center relative">
      {/* Gradient Circle */}
      <div className="h-64 w-64 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400 to-blue-500 p-1 flex items-center justify-center relative">
        <div className="h-full w-full rounded-full bg-white"></div>
      </div>

      {/* Cap Section */}
      <motion.div
        className="absolute z-10 overflow-hidden"
        initial={{ y: 0 }}
        animate={{ y: -200 }} // Move cap upwards
        transition={{ type: "spring", stiffness: 100 , delay: 1.2, duration:2.4  }}
        style={{ height: "78px", width: "100px" }} // Adjust to cap's size
      >
        <img
          src="bottles.png" // Replace with your bottle image
          alt="Bottle Cap"
          className="w-auto h-auto translate-y-[0px]" // Offset to show only the cap
        />
      </motion.div>

      {/* Bottle Section */}
      <motion.div
              className="absolute z-0 overflow-hidden"
              initial={{ y: 0 }}
              animate={{ y: 200 }} // Move bottle body downwards
              transition={{ type: "spring", stiffness: 100, delay: 1.2, duration:2.4 }}
              style={{ height: "calc(100% - 50px)", width: "100px" }} // Adjust to bottle's size
            >
              <img
                src="bottles.png" // Replace with your bottle image
                alt="Bottle Body"
                className="w-auto h-auto translate-y-[50px]" // Offset to show only the body
              />
            </motion.div>
      
            {/* Inquiry Button */}
            <button className="absolute bottom-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full shadow-md">
              Inquiry Now
            </button>
          </div>
        );
      }
      
