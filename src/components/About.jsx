import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaCoffee, FaMusic, FaFutbol } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center"
        >
          {/* Left - Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left font-black text-white leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Me
                </span>
              </h2>
              <div className="mt-4 w-24 h-1 mx-auto md:mx-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 leading-relaxed text-center md:text-left max-w-xl sm:max-w-2xl mx-auto md:mx-0"
            >
              I'm a passionate{" "}
              <span className="text-white font-semibold">FULL Stack Developer</span> with a strong focus on building fast, responsive, and visually stunning web applications. My journey started with curiosity — from writing my first line of HTML to mastering React animations and full-stack architecture.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 leading-relaxed text-center md:text-left max-w-xl sm:max-w-2xl mx-auto md:mx-0"
            >
              I specialize in crafting pixel-perfect user interfaces, optimizing performance, and creating seamless user experiences using modern tools like React, Next.js, Node.js, MongoDB, and Tailwind CSS.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
              <p className="text-gray-400 text-center md:text-left italic">
                "Code is like humor. When you have to explain it, it's bad." – Cory House
              </p>
            </motion.div>
          </div>

          {/* Right - Skills + Personal Touch */}
          <div className="space-y-12">
            {/* Tech Stack */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center md:text-left mb-6 sm:mb-8">
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { icon: FaReact, label: "React", color: "text-cyan-400" },
                  { icon: FaNodeJs, label: "Node.js", color: "text-green-400" },
                  { icon: FaDatabase, label: "MongoDB", color: "text-green-500" },
                  { icon: FaCode, label: "JavaScript", color: "text-yellow-400" },
                  { icon: FaReact, label: "Next.js", color: "text-white" },
                  { icon: FaCode, label: "Tailwind", color: "text-cyan-300" },
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -6 }}
                    className="flex flex-col items-center gap-2 sm:gap-3 bg-gray-900/50 backdrop-blur p-4 sm:p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <skill.icon className={`text-3xl sm:text-4xl ${skill.color}`} />
                    <span className="text-gray-300 text-xs sm:text-sm font-medium">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Interests */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center md:text-left">
                Beyond Coding
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                {[
                  { icon: FaCoffee, text: "Coffee Addict" },
                  { icon: FaMusic, text: "Lo-fi & Chillhop" },
                  { icon: FaFutbol, text: "Casual Football" },
                ].map((item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3 bg-gray-900/60 backdrop-blur border border-gray-800 rounded-full text-gray-300 text-xs sm:text-sm font-medium"
                  >
                    <item.icon className="text-base sm:text-lg" />
                    {item.text}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
