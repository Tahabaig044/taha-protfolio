"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100dvh-4rem)] flex items-center justify-center overflow-hidden pt-16 h-[100vh]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-indigo-50/20 to-transparent dark:via-indigo-900/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent from-70% to-indigo-100/30 dark:to-indigo-900/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
        {/* Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <p className="text-base sm:text-lg md:text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-2 sm:mb-3 md:mb-4">
              Hello, I'm
            </p>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              <TypeAnimation
                sequence={[
                  "Taha",
                  1200,
                  "A Developer",
                  1200,
                  "A Designer",
                  1200,
                  "A Freelancer",
                  1200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-indigo-600 dark:text-indigo-400"
              />
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4 text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies
            </h2>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-lg hover:shadow-indigo-500/30 transition-all text-sm sm:text-base"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Taha Resume.pdf"
                download
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all text-sm sm:text-base"
              >
                Download CV
                <Download className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Profile image */}
        <div className="lg:w-1/2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px]"
          >
            <div className="absolute inset-0 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-xl animate-pulse" />
            <Image
              src="/taha.jpeg"
              alt="Taha's Profile"
              fill
              priority
              quality={95}
              className="relative z-10 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 object-cover"
              sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
            />
          </motion.div>
        </div>
      </div>

      {/* Floating elements - Reduced on mobile */}
      <motion.div
        className="hidden sm:block absolute top-20 left-10 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-indigo-100/80 dark:bg-indigo-900/30 backdrop-blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="hidden sm:block absolute bottom-1/4 right-1/4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-100/60 dark:bg-indigo-900/20 backdrop-blur-sm"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Scroll indicator - Hidden on small screens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-4 h-6 border-2 border-gray-400 dark:border-gray-500 rounded-full">
              <motion.div
                className="w-1 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mx-auto mt-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}