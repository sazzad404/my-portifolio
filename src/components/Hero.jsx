import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import profileImg from "../assets/img 2.png";
import { FaBriefcase, FaPaperPlane } from "react-icons/fa";

export default function Hero() {
  const hireMe = () => {
    const subject = encodeURIComponent(
      "Hiring Sazzad Hasan – Full-Stack Developer"
    );

    // Only subject, no prefilled body
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=sazzadhasan313@gmail.com&su=${subject}`,
      "_blank"
    );
  };
  return (
    <section className="relative min-h-screen pt-30 pb-30 flex items-center justify-center bg-black overflow-hidden">
      {/* Background - Deep Black with Subtle Moving Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -120, 80, 0],
            y: [0, 120, -80, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-15"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16">
        {/* Left Side - Text */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-purple-400 font-medium text-lg tracking-wider">
              Hello, I'm
            </p>

            <h1 className="mt-4 text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none">
              Sazzad
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Hasan
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
              FULL Stack Developer
            </h2>
            <p className="mt-3 text-xl text-gray-400">
              React • Next.js • Node.js • MongoDB • Tailwind
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            I build fast, responsive, and scalable web applications with modern
            technologies and clean code. Focused on performance, user
            experience, and pixel-perfect frontend.
          </motion.p>

         
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Top Buttons */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1Zjz6nw6WaUnGMUTpKoe4hkSxpcVdg1J6/view?usp=sharing"
                className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-purple-600/60 transition-all duration-300"
                target="_blank"
                 rel="noopener noreferrer"
              >
                <FaDownload className="text-xl" />
                Resume
                <FaArrowRight className="group-hover:translate-x-2 transition-transform text-sm" />
              </a>

              <button
                onClick={hireMe}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-emerald-500/60 transform hover:scale-105 transition-all duration-300"
              >
                <FaBriefcase className="text-2xl group-hover:animate-bounce" />
                Hire Me
                <FaPaperPlane className="text-lg group-hover:translate-x-2 transition" />
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="flex gap-4 md:mr-6 lg:ml-33 mt-4 justify-center lg:justify-start">
              <a
                href="https://github.com/sazzad404"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-purple-500 hover:bg-purple-900/20 transition-all"
              >
                <FaGithub className="text-xl text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-sazzad-hasan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500 hover:bg-blue-900/20 transition-all"
              >
                <FaLinkedin className="text-xl text-gray-300" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Clean Image with Tech Badges */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl" />

            <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-3xl shadow-2xl">
              <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
                <img
                  src={profileImg}
                  alt="Sazzad Hossen"
                  className="w-80 h-80 md:w-96 md:ml-4 lg:ml-0 md:h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

           
            {/* Tech Stack Badges */}
            <div className=" flex flex-wrap justify-center gap-3 bg-black/90 backdrop-blur-md px-6 py-3 rounded-full border border-gray-800">
              {["React", "Next.js", "Node.js", "MongoDB", "Tailwind"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium text-gray-300 bg-gray-800/60 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-1 lg:bottom-10 left-1/2 -translate-x-1/2 text-gray-500  text-sm"
      >
        Scroll to explore
        <div className="w-6 h-10 border border-gray-700 rounded-full mx-auto mt-2 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
