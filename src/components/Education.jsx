import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const education = [
  {
    degree: "Diploma in Computer Science & Technology",
    institution: "Dinajpur Polytechnic Institute",
    duration: "2024 — 2028 (Expected)",
    location: "Dinajpur, Bangladesh",
    description:
      "4-year hands-on program. Building full-stack web apps, REST APIs, databases, authentication systems & deploying live projects while studying.",
    status: "Currently Pursuing • 4th Semester",
    highlight: true,
  },
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "Planning via Lateral Entry",
    duration: "2028 — 2031 (Expected)",
    location: "Bangladesh",
    description:
      "Future goal: Deep dive into System Design, Cloud Computing, AI/ML, DevOps & Advanced Algorithms after completing diploma.",
    status: "Upcoming",
    highlight: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.4 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -10 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white">
            Academic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Journey
            </span>
          </h2>
          <div className="mt-4 sm:mt-6 w-20 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
          <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto">
            From practical diploma to future BSc — learning by building real products
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Center Line (desktop only) */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-transparent hidden lg:block" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={cardVariants}
              className={`relative flex flex-col lg:flex ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center lg:items-stretch justify-between mb-10 sm:mb-14 lg:mb-20 gap-6 sm:gap-8`}
            >
              {/* Timeline Dot (desktop only) */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-2xl shadow-purple-600/50 border-4 border-black z-10"
                />
              </div>

              {/* Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center lg:text-inherit`}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 260 } }}
                  className={`relative bg-gradient-to-br ${
                    edu.highlight
                      ? "from-purple-900/30 to-blue-900/20 border-purple-500/40 shadow-purple-600/30"
                      : "from-gray-900/50 to-gray-800/30 border-gray-800"
                  } backdrop-blur-sm border rounded-2xl p-6 sm:p-7 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500`}
                >
                  {/* Highlight / Upcoming Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8">
                    <span
                      className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm font-bold ${
                        edu.highlight
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white animate-pulse"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      }`}
                    >
                      {edu.highlight ? "Currently Studying" : "Upcoming"}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center lg:items-start gap-4 sm:gap-5">
                    <div
                      className={`p-3 sm:p-4 rounded-xl ${
                        edu.highlight ? "bg-gradient-to-br from-purple-600 to-blue-600" : "bg-gray-800"
                      } shadow-xl mx-auto sm:mx-0`}
                    >
                      {edu.highlight ? (
                        <FaLaptopCode className="text-xl sm:text-2xl text-white" />
                      ) : (
                        <FaRocket className="text-xl sm:text-2xl text-gray-300" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-300 font-semibold mt-1 text-sm sm:text-base">{edu.institution}</p>

                      <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt /> {edu.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaMapMarkerAlt /> {edu.location}
                        </span>
                      </div>

                      <p className="mt-3 sm:mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                        {edu.description}
                      </p>

                      <div className="mt-4 sm:mt-5">
                        <span
                          className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm ${
                            edu.highlight
                              ? "bg-emerald-900/60 text-emerald-300 border border-emerald-600"
                              : "bg-blue-900/60 text-blue-300 border border-blue-600"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Spacer for alternating layout (desktop only) */}
              <div className="w-full lg:w-5/12 hidden lg:block" />
            </motion.div>
          ))}
        </motion.div>

        {/* Final Strong Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-24 text-base sm:text-xl md:text-3xl font-bold text-gray-300 leading-relaxed px-4"
        >
          I'm still a student — but my code is{" "}
          <span className="text-white font-black">already running in production</span>
        </motion.p>
      </div>
    </section>
  );
}
