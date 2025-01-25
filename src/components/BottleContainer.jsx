import React from "react";
import { motion } from "framer-motion";

const BottleContainer = () => {
  return (
    <div className="">
      <main class="flex flex-col items-center justify-center">
        {/* <!-- Gradient Circle --> */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
          className="w-[400px] h-[400px] rounded-full bg-gradient-to-b from-cyan-400 to-blue-400 p-1"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
            className="w-full h-full rounded-full bg-white"
          ></motion.div>
        </motion.div>

        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [0, -250, -150] }}
          transition={{
            delay: 1.2,
            duration: 7.4,
            ease: "easeInOut",
            repeatDelay: 2,
          }}
          src="Bottle-Cap.svg"
          alt="Bottle Cap"
          className="top-96 absolute z-10 "
        />

        {/* Bottle Section */}

        <motion.img
          initial={{ y: 0 }}
          animate={{ y: [0, 250, -150] }}
          transition={{
            delay: 1.2,
            duration: 6.4,
            ease: "easeInOut",
            repeatDelay: 0.5,
          }}
          src="Bottle-down.svg"
          alt="Bottle Body"
          className="top-96 absolute z-10"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 2 }}
          transition={{ duration: 2.2, delay: 2.4, ease: "easeInOut" }}
          className="absolute flex flex-col justify-center items-center top-80"
        >
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            The Ultimate Companion for Hydration
          </h1>
          <p style={{ fontSize: "1rem" }}>
            We believe in the power of hydration. Our mission is simple yet
            vital.
          </p>
        </motion.div>

        <motion.button
          initial={{ y: 300 }}
          animate={{ y: 100 }}
          transition={{ duration: 2.2, delay: 2.4 }}
          className="text-white text-xl w-40 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-blue-400 p-1 "
        >
          Inquiry Now
        </motion.button>
      </main>
      <div className="h-32 flex justify-between m-4">
        <motion.img
          initial={{ y: 150 }}
          animate={{ y: -950 }}
          transition={{ delay: 4, duration: 2.4, ease: "easeInOut" }}
          src="leftBottle.svg"
          alt="Left Bottle"
          className=""
        />

        <motion.img
          initial={{ y: 150 }}
          animate={{ y: -950 }}
          transition={{ delay: 4, duration: 2.4, ease: "easeInOut" }}
          src="rightBottle.svg"
          alt="Right Bottle"
          className="bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default BottleContainer;
