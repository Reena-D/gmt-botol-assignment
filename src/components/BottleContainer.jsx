import React from 'react';
import { motion } from 'framer-motion';

const BottleContainer = () => {
  return (
    <div className=''>
      {/* <div className='bottleContainer-middle'>
      <div className='mid-circle'>hi hello</div>
      <button className='header-inquiry'>Inquiry Now</button>

      </div> */}

      <main class="flex flex-col items-center justify-center">
    {/* <!-- Gradient Circle --> */}
    <motion.div
    initial={{ scale: 0.95 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
     // class="h-80 w-80 border-4 border-transparent bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center"
    className="w-[400px] h-[400px] rounded-full bg-gradient-to-b from-cyan-400 to-blue-400 p-1"
    >
      <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
      // class="w-80 h-80 rounded-full bg-gradient-to-b from-cyan-400 to-blue-400 p-1"
       className="w-full h-full rounded-full bg-white"></motion.div>
    </motion.div>
   

    {/* <!-- Bottle Image --> */}
    {/* <div className='bottleWrapper'>
    <motion.img
    initial={{ y: 0 }}
    animate={{ y: -150 }}
    transition={{ duration: 1, ease: "easeInOut" }}
      src="bottles.png" 
      alt="Bottle"
      class="bottle absolute top-[247px] left-[663px]   h-[493px] w-[176px]"
    />
    </div> */}

    

        <motion.img
         initial={{ y: 0 }}
         animate={{ y: [0,-250, -150] }}
         transition={{ delay:1.2, duration: 7.4, ease: "easeInOut", repeatDelay:2,  }}
          src="Bottle-Cap.svg" // Replace with your bottle image
          alt="Bottle Cap"
          className="top-96 absolute z-10 " // Offset to show only the cap
        />
     

      {/* Bottle Section */}
    
              <motion.img
               initial={{ y: 0 }}
               animate={{ y: [0,250, -150] }}
               transition={{ delay:1.2, duration: 6.4, ease: "easeInOut",repeatDelay:0.5, }}
                src="Bottle-Down.svg" // Replace with your bottle image
                alt="Bottle Body"
                className="top-96 absolute z-10" // Offset to show only the body
              />
       



    {/* Text */}
     <motion.div
        initial={{ opacity: 0, scale: 0  
           }}
        animate={{ opacity: 1, scale: 2 }}
        transition={{ duration: 2.2, delay: 2.4,  ease: "easeInOut" }}
        className='absolute flex flex-col justify-center items-center top-80'
       
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          The Ultimate Companion for Hydration
        </h1>
        <p style={{ fontSize: "1rem" }}>
          We believe in the power of hydration. Our mission is simple yet vital.
        </p>
       
      </motion.div>

      <motion.button
          initial={{ y: 300 }}
          animate={{ y: 100 }}
          transition={{ duration: 2.2, delay: 2.4, }}
          className='text-white text-xl w-40 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-blue-400 p-1 '
        >
          Inquiry Now
        </motion.button>
{/* 
    <!-- Button Below Circle -->
    <button
      class="mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:opacity-90"
    >
      Inquiry Now
    </button>  */}


 </main>
<div className='h-32 flex justify-between m-4'>
 <motion.img
         initial={{ y: 150 }}
         animate={{ y: -950 }}
         transition={{ delay:4, duration: 2.4, ease: "easeInOut" }}
          src="leftBottle.svg" // Replace with your bottle image
          alt="Left Bottle"
          className="" // Offset to show only the cap
        />

<motion.img
         initial={{ y: 150 }}
         animate={{ y: -950 }}
         transition={{ delay:4, duration: 2.4, ease: "easeInOut" }}
          src="rightBottle.svg" // Replace with your bottle image
          alt="Right Bottle"
          className="bottom-0 left-0" // Offset to show only the cap
        />
        </div>
    </div>
  )
}

export default BottleContainer
