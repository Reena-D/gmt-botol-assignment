"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

export default function Timeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const timelinePoints = [
    {
      number: "1",
      title: "Week 1 - Relief & Clarity:",
      description: "Feel the weight start to lift as you open up, discovering clarity in a safe, non-judgmental space.",
    },
    {
      number: "2",
      title: "Week 4 -Increased Resilience:",
      description: "Begin to notice your reactions shift—less anxiety, more calmness, and tools to manage stress.",
    },
    {
      number: "3",
      title: "Week 8 Lasting Positivity",
      description:
        "Wake up with a renewed sense of well-being, as you start to take control of your mental and emotional health",
    },
    {
      number: "4",
      title: "3 Months & Beyond - Thriving:",
      description:
        "Live with confidence, peace, and joy as you embrace the lasting impact of therapy on every area of your life.",
    },
  ]

  const [xValues, setXValues] = useState([])

  return (
    <div className="w-full relative py-32" ref={containerRef}>
         <div className='w-[1515px] h-1' >
         <img src='timeline1.jpg'/>
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative" style={{ marginTop: '-400px' }}>
          {/* Timeline line */}
          <div className="absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-[#fcd0d6] via-[#f6687a] to-[#b94e5c]" />

          {/* Timeline points */}
          <div className="relative flex gap-24">
            {timelinePoints.map((point, index) => {
              const x = useTransform(scrollYProgress, [0, 1], [index * 100, -100 * (timelinePoints.length - index - 1)])
              return (
                <motion.div key={point.number} style={{ x }} className="flex flex-col items-center min-w-[300px]">
                  {/* Point number */}
                  <div className="w-8 h-8 rounded-full bg-[#f6687a] text-white flex items-center justify-center font-bold text-lg mb-4 relative z-10">
                    {point.number}
                  </div>

                  {/* Point marker */}
                  <div className="w-4 h-4 rounded-full bg-[#fcd0d6] absolute top-24 transform -translate-y-1/2" />

                  {/* Content */}
                  <div className={`text-center ${index % 2 === 0 ? "mt-16" : "mb-16 order-first"}`}>
                    <h3 className="font-semibold text-[#b94e5c] mb-2">{point.title}</h3>
                    <p className="text-sm text-gray-600 max-w-xs mx-auto">{point.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

