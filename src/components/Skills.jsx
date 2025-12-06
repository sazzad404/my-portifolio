import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";

const skillsData = [
  { name: "React", level: 92, icon: FaReact, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", level: 88, icon: SiNextdotjs, color: "from-white to-gray-400" },
  { name: "JavaScript", level: 90, icon: FaJsSquare, color: "from-yellow-400 to-orange-500" },
  { name: "Node.js", level: 85, icon: FaNodeJs, color: "from-green-400 to-green-600" },
  { name: "MongoDB", level: 82, icon: SiMongodb, color: "from-green-500 to-emerald-600" },
  { name: "Tailwind CSS", level: 95, icon: SiTailwindcss, color: "from-cyan-400 to-teal-500" },
  { name: "Express.js", level: 84, icon: SiExpress, color: "from-gray-300 to-gray-500" },
  { name: "Git/GitHub", level: 90, icon: FaGitAlt, color: "from-orange-500 to-red-600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Skills
            </span>
          </h2>
          <div className="mt-4 sm:mt-6 w-20 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
          <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Technologies I use every day to deliver high-quality, modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-600/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}>
                  <skill.icon className="text-2xl sm:text-3xl md:text-4xl text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{skill.name}</h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-400">Proficiency</span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-white font-bold"
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                <div className="w-full h-2 sm:h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20 text-gray-500 text-sm sm:text-base md:text-lg italic"
        >
          Constantly learning • Always improving • Built with passion
        </motion.p>
      </div>
    </section>
  );
}
