// src/components/Projects.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPlus,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaTools,
  FaLightbulb,
  FaImage,
  FaTrash,
} from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import { useAdmin } from "../context/AdminContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Projects() {
  const { isAdmin } = useAdmin();

  const [projects, setProjects] = useState(() => {
    const raw = localStorage.getItem("pf_projects");
    return raw
      ? JSON.parse(raw)
      : [
          {
            id: 1,
            name: "MERN E-commerce (Demo)",
            image: "",
            stack: "MongoDB, Express, React, Node",
            description:
              "Full-featured e-commerce platform with auth & payment",
            live: "#",
            client: "#",
            challenges: "JWT Auth, Stripe Integration",
            improvements: "Order tracking, Admin analytics",
          },
          {
            id: 2,
            name: "Portfolio CMS",
            image: "",
            stack: "Next.js, Tailwind, Sanity.io",
            description: "Dynamic portfolio with content management",
            live: "#",
            client: "#",
            challenges: "Real-time preview editor",
            improvements: "User roles & permissions",
          },
          {
            id: 3,
            name: "Real-time Chat App",
            image: "",
            stack: "Socket.io, React, Node.js",
            description: "Instant messaging with typing indicators",
            live: "#",
            client: "#",
            challenges: "WebSocket scaling",
            improvements: "File sharing, End-to-end encryption",
          },
        ];
  });

  const [modal, setModal] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    image: "",
    stack: "",
    description: "",
    live: "",
    client: "",
    challenges: "",
    improvements: "",
  });

  // Save to localStorage
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("pf_projects", JSON.stringify(projects));
  }, [projects]); // ← এখানে projects হবে

  // Image Upload Handler
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setNewProject((s) => ({ ...s, image: reader.result }));
    reader.readAsDataURL(file);
  };

  // Add New Project
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newProject.name.trim()) return alert("Project name is required!");

    setProjects((p) => [{ ...newProject, id: Date.now() }, ...p]);
    setNewProject({
      name: "",
      image: "",
      stack: "",
      description: "",
      live: "",
      client: "",
      challenges: "",
      improvements: "",
    });
    setShowForm(false);
  };

  // Delete Project
  const handleDelete = (id) => {
    if (window.confirm("এই প্রজেক্টটা পুরোপুরি মুছে ফেলবি?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 px-6 bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Projects
            </span>
          </h2>
          <div className="mt-6 w-40 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world applications I've built — from idea to production
          </p>
        </motion.div>

        {/* Add Project Button – শুধু এডমিন দেখবে */}
        {isAdmin && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <FaPlus
                className={`transition-transform ${
                  showForm ? "rotate-45" : ""
                }`}
              />
              {showForm ? "Cancel" : "Add New Project"}
            </button>
          </motion.div>
        )}

        {/* Add Project Form */}
        {isAdmin && showForm && (
          <motion.form
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleAdd}
            className="mb-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <input
                required
                placeholder="Project Name *"
                value={newProject.name}
                onChange={(e) =>
                  setNewProject({ ...newProject, name: e.target.value })
                }
                className="p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition"
              />
              <label className="cursor-pointer">
                <div className="flex items-center justify-center p-4 bg-white/10 border border-white/20 rounded-xl hover:border-purple-500 transition">
                  <FaImage className="mr-3 text-xl" />
                  <span>
                    {newProject.image ? "Image Selected" : "Upload Image"}
                  </span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                />
              </label>
              <input
                placeholder="Tech Stack (comma separated)"
                value={newProject.stack}
                onChange={(e) =>
                  setNewProject({ ...newProject, stack: e.target.value })
                }
                className="p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400"
              />
              <textarea
                rows={3}
                placeholder="Short Description"
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
                className="p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 md:col-span-3"
              />
              <input
                placeholder="Live Link"
                value={newProject.live}
                onChange={(e) =>
                  setNewProject({ ...newProject, live: e.target.value })
                }
                className="p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400"
              />
              <input
                placeholder="GitHub Repo"
                value={newProject.client}
                onChange={(e) =>
                  setNewProject({ ...newProject, client: e.target.value })
                }
                className="p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400"
              />
              <input
                placeholder="Challenges Faced"
                value={newProject.challenges}
                onChange={(e) =>
                  setNewProject({ ...newProject, challenges: e.target.value })
                }
                className="p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400"
              />
              <input
                placeholder="Future Improvements"
                value={newProject.improvements}
                onChange={(e) =>
                  setNewProject({ ...newProject, improvements: e.target.value })
                }
                className="p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="md:col-span-3 lg:col-span-1 bg-gradient-to-r from-emerald-500 to-teal-600 py-4 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-emerald-600/50 transition"
              >
                Add to Portfolio
              </button>
            </div>
          </motion.form>
        )}

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl hover:shadow-purple-600/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="h-56 bg-gray-900/50 relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <FaCode className="text-6xl text-gray-700" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-purple-300 font-medium mb-3">
                  {project.stack}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.challenges && (
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-500/30">
                      <FaTools className="inline mr-1" /> {project.challenges}
                    </span>
                  )}
                  {project.improvements && (
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-500/30">
                      <FaLightbulb className="inline mr-1" />{" "}
                      {project.improvements}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setModal(project)}
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition"
                  >
                    View Details <FaExternalLinkAlt />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.client || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
                    >
                      <FaGithub className="text-xl" />
                    </a>

                    {/* Delete Button – শুধু এডমিন */}
                    {isAdmin && (
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-3 bg-red-600/20 text-red-400 rounded-full hover:bg-red-600/40 transition"
                        title="Delete Project"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-24 text-2xl md:text-4xl font-bold text-gray-300"
        >
          I don’t just code — I{" "}
          <span className="text-white font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ship real products
          </span>
        </motion.p>
      </div>

      {/* Modal */}
      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
