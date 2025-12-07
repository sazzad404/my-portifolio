import React from "react";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaTools,
  FaLightbulb,
  FaCode,
} from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // বাটনগুলির জন্য কমন স্টাইল
  const baseButtonClasses = "flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-white font-semibold text-sm sm:text-base rounded-full shadow-xl transition duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]";
  
  // Live Demo বাটনের জন্য বিশেষ স্টাইল
  const liveButtonClasses = `${baseButtonClasses} bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700`;

  // Repo বাটনের জন্য বিশেষ স্টাইল
  const repoButtonClasses = `${baseButtonClasses} bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30`;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        className="fixed inset-4 md:inset-8 lg:inset-12 z-[60] flex items-center justify-center"
      >
        <div className="relative w-full max-w-6xl max-h-full overflow-y-auto bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-black/60 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-5xl">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-white/10 hover:bg-white/30 rounded-full backdrop-blur-sm transition duration-300 z-10 text-white"
            title="Close"
          >
            <FaTimes className="text-xl sm:text-2xl" />
          </button>

          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Image Side */}
            <div className="relative h-[25rem] sm:h-[32rem] lg:h-auto lg:min-h-[500px] overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-800/50 to-blue-800/50">
                  <FaCode className="text-9xl text-white/30" />
                </div>
              )}
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

              {/* Buttons row - এখন এটি ইমেজ/ভিডিও এর নিচে মাঝখানে আছে */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center items-center gap-3 sm:gap-4 p-2">
                
                {/* Live Demo Button */}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={liveButtonClasses}
                  >
                    <FaExternalLinkAlt className="text-base" /> Live Demo
                  </a>
                )}

                {/* Client Repo Button */}
                {project.clientRepo && project.clientRepo !== "#" && (
                  <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noreferrer"
                    className={repoButtonClasses}
                    title="Client Repository"
                  >
                    <FaGithub className="text-base" /> Client
                  </a>
                )}

                {/* Server Repo Button */}
                {project.serverRepo && project.serverRepo !== "#" && (
                  <a
                    href={project.serverRepo}
                    target="_blank"
                    rel="noreferrer"
                    className={repoButtonClasses}
                    title="Server Repository"
                  >
                    <FaCode className="text-base" /> Server
                  </a>
                )}
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                {project.name}
              </h2>

              {/* Stack/Category Tag */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-purple-600/40 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/30">
                  {project.stack || "Full Stack"}
                </span>
              </div>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
                {project.description ||
                  "A powerful project built with modern technologies."}
              </p>

              <div className="space-y-8">
                {/* Challenges Section */}
                {project.challenges && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-purple-300">
                      <FaTools className="text-purple-400 text-lg" />
                      Challenges Overcame
                    </h3>
                    <p className="text-gray-300 leading-relaxed bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                      {project.challenges}
                    </p>
                  </div>
                )}

                {/* Future Improvements Section */}
                {project.improvements && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-yellow-300">
                      <FaLightbulb className="text-yellow-400 text-lg" />
                      Future Improvements
                    </h3>
                    <p className="text-gray-300 leading-relaxed bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                      {project.improvements}
                    </p>
                  </div>
                )}
              </div>

              {/* Built With Tags (Improved Style) */}
              {project.stack && (
                <div className="mt-10 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 border border-white/30 rounded-full text-sm font-medium backdrop-blur-sm shadow-md transition hover:bg-white/20 cursor-default"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectModal;