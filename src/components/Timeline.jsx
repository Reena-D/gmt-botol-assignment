import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";


const Timeline = () => {


  const { scrollYProgress } = useScroll();
  const translateX1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "-100%"]);
  const translateX2 = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]);
  const translateX3 = useTransform(scrollYProgress, [0.5, 0.75], ["100%", "0%"]);
  const translateX4 = useTransform(scrollYProgress, [0.75, 1], ["100%", "0%"]);

  const steps = [
    {
      title: "Week 1 - Relief & Clarity",
      description: "Feel the weight start to lift as you open up, discovering clarity in a safe, non-judgmental space.",
    },
    {
      title: "Week 2 - Deeper Insights",
      description: "Start identifying patterns, gaining insights into your emotions and triggers.",
    },
    {
      title: "Week 3 - Building Tools",
      description: "Learn strategies to manage stress, regulate emotions, and build resilience.",
    },
    {
      title: "Week 4 - Increased Resilience",
      description: "Begin to notice your reactions shift—less anxiety, more calmness, and tools to manage stress.",
    },
  ];

  return (
    <div className='w-[1515px] h-1'>
      <img src='timeline1.jpg'/>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20">
      <div className="relative w-80 max-w-4xl">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            style={{
              x: [translateX1, translateX2, translateX3, translateX4][index],
            }}
            className="absolute w-full px-4 py-6 bg-white rounded-lg shadow-md border border-pink-200"
          >
            <div className="text-pink-500 font-bold text-2xl mb-2">{step.title}</div>
            <div className="text-gray-700 text-sm">{step.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Timeline
