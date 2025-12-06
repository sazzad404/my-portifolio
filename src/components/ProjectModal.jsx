// ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaTools, FaLightbulb, FaCode } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: 100 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex items-center justify-center"
      >
        <div className="relative w-full max-w-6xl max-h-full overflow-y-auto bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black/50 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-5xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition z-10"
          >
            <FaTimes className="text-2xl text-white" />
          </button>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-96 lg:h-full overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Live & GitHub Buttons on Image */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-2xl hover:scale-110 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.client && project.client !== "#" && (
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                )}
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 text-white">
              <h2 className="text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {project.name}
              </h2>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-purple-600/40 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/30">
                  {project.stack || "Full Stack"}
                </span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                {project.description || "A powerful project built with modern technologies."}
              </p>

              {/* Challenges & Improvements */}
              <div className="space-y-8">
                {project.challenges && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <FaTools className="text-purple-400" />
                      Challenges Overcame
                    </h3>
                    <p className="text-gray-300 leading-relaxed bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      {project.challenges}
                    </p>
                  </div>
                )}

                {project.improvements && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <FaLightbulb className="text-yellow-400" />
                      Future Improvements
                    </h3>
                    <p className="text-gray-300 leading-relaxed bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                      {project.improvements}
                    </p>
                  </div>
                )}
              </div>

              {/* Tech Stack Pills (Optional Bonus) */}
              {project.stack && (
                <div className="mt-10">
                  <h4 className="text-sm font-bold text-gray-400 mb-3">Built With</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-white/20 rounded-full text-sm backdrop-blur-sm"
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