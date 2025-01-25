import React from 'react';
import { motion } from 'framer-motion'; 

const BottleTypes = () => {
  return (
    <motion.div 
    initial={{ y: 0 }}
    animate={{ y: -700 }}
    transition={{ delay:5.2, duration: 2.4, ease: "easeInOut" }}
    className='flex absolute h-[760px] ' >
    <div className=' w-[756px] h-[760px] bg-[#E6D4CB]'>
      <img src='slant-bottle.svg' alt='svg-bottle' />
   
    </div>

    

       <div className='flex justify-center items-center w-[956px] h-[860px] left-[756px] bg-[#20292C]'>
      
        <ul className=''>
            <li className='text-[#FFFFFF] font-normal text-4xl m-5 p-5 flex'><img className='w-14 h-14 m-3' alt='' src='vaccume bottle.svg'/>Vacuum Bottles</li>
            <li className='text-[#FFFFFF] font-normal text-4xl m-5 p-5 flex'><img className='w-14 h-14 m-3' alt='' src='Fridge.svg'/>Fridge Bottles and Jugs</li>
            <li className='text-[#FFFFFF] font-normal text-4xl m-5 p-5 flex'><img className='w-14 h-14 m-3' alt='' src='Borosilicate.svg'/>Borosilicate Bottles</li>
            <li className='text-[#FFFFFF] font-normal text-4xl m-5 p-5 flex'><img className='w-14 h-14 m-3' alt='' src='wine.svg'/>Kettles</li>
        </ul>
        
       </div>
       </motion.div>
  )
}

export default BottleTypes
