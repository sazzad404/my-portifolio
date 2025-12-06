// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 px-6 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-10 w-72 h-72 bg-purple-600/20 blur-3xl animate-pulse rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-600/20 blur-3xl animate-pulse rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left: About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-gray-400 text-sm">
            I'm Sazzad Hasan, a MERN stack developer passionate about creating beautiful and responsive web applications. Always open for collaboration and exciting projects.
          </p>
        </motion.div>

        {/* Center: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-purple-400 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400 transition">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            </li>
          </ul>
        </motion.div>

        {/* Right: Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="text-purple-400" />
            <span className="text-gray-400 text-sm">sazzadhasan313@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <FaPhoneAlt className="text-purple-400" />
            <span className="text-gray-400 text-sm">+880 1780-XXXXXX</span>
          </div>

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/sazzadofficial150"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/sazzadofficial"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://twitter.com/sazzadofficial"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition"
            >
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 border-t border-white/10 pt-6 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} Sazzad Hasan. All rights reserved.
      </motion.div>
    </footer>
  );
}
