import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAdmin } from "../context/AdminContext";

export default function Navbar({ onNav, currentSection = "home" }) {
  const [open, setOpen] = useState(false);
  const { isAdmin, user, loading } = useAdmin();
  const items = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["education", "Education"],
    ["projects", "Projects"],
    ["contact", "Contact"],
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => onNav("home")}
          className="cursor-pointer select-none"
        >
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-white">Sazzad</span>
            <span className="text-gray-500 ml-2">Hossen</span>
          </h1>
          <p className="text-[10px] sm:text-xs text-gray-500 tracking-widest mt-1 font-medium">
            FULL STACK DEVELOPER
          </p>
        </motion.div>

        {/* Desktop Menu */}
        <div
          className={
            isAdmin && user
              ? "hidden lg:flex items-center mr-78 gap-6 xl:gap-8 flex-wrap"
              : "hidden lg:flex items-center gap-6 xl:gap-8 flex-wrap"
          }
        >
          {items.map(([key, label]) => (
            <motion.button
              key={key}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              onClick={() => onNav(key)}
              className={`relative text-base xl:text-lg font-medium transition-colors duration-300 px-2 py-1 ${
                currentSection === key
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
              {currentSection === key ? (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"
                />
              ) : (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-600 scale-x-0 origin-left"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={isAdmin && user ?"lg:hidden text-gray-300 mr-75 p-2": "lg:hidden text-gray-300 p-2"}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800"
          >
            <div className="py-6 px-6 flex flex-col gap-3">
              {items.map(([key, label]) => (
                <motion.button
                  key={key}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onNav(key);
                    setOpen(false);
                  }}
                  className={`w-full text-left text-lg sm:text-xl font-medium py-3 transition-colors ${
                    currentSection === key
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {label}
                  {currentSection === key && (
                    <motion.div
                      layoutId="mobile-underline"
                      className="mt-1 h-0.5 bg-white w-16"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
