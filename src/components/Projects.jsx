import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";
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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const { isAdmin } = useAdmin();

  const [projects, setProjects] = useState([]);
  const [modal, setModal] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true); // লোডিং স্টেট যোগ করলাম

  const [newProject, setNewProject] = useState({
    name: "",
    image: "",
    stack: "",
    description: "",
    live: "",
    clientRepo: "",
    serverRepo: "",
    challenges: "",
    improvements: "",
  });

  // Load projects from server
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://sazzad-portfolio-liart.vercel.app/projects"
        );
        console.log("Fetched Projects:", res.data); // ডিবাগিংয়ের জন্য
        setProjects(res.data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        Swal.fire("Error", "Could not load projects", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ইমেজ কম্প্রেস করে নিচ্ছি (অপশনাল কিন্তু ভালো)
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 1200;
        const scale = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressed = canvas.toDataURL("image/webp", 0.8);
        setNewProject((prev) => ({ ...prev, image: compressed }));
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newProject.name.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Project name is required!",
      });
      return;
    }

    try {
      const res = await axios.post(
        "https://sazzad-portfolio-liart.vercel.app/projects",
        newProject
      );

      // এখানেই ম্যাজিক! res.data.project নিতে হবে (তোমার সার্ভার যেভাবে পাঠাচ্ছে)
      const addedProject = res.data.project || res.data; // দুইটা ক্ষেত্রেই কাজ করবে

      setProjects((prev) => [addedProject, ...prev]);

      setNewProject({
        name: "",
        image: "",
        stack: "",
        description: "",
        live: "",
        clientRepo: "",
        serverRepo: "",
        challenges: "",
        improvements: "",
      });
      setShowForm(false);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: `"${addedProject.name}" added successfully`,
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error("Add project error:", err);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Could not add project",
      });
    }
    1;
  };

  const handleDelete = async (id) => {
    const projectToDelete = projects.find((p) => p._id === id);
    if (!projectToDelete) return;

    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Delete "${projectToDelete.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `https://sazzad-portfolio-liart.vercel.app/projects/${id}`
        );
        setProjects((prev) => prev.filter((p) => p._id !== id));
        Swal.fire(
          "Deleted!",
          `${projectToDelete.name} has been removed.`,
          "success"
        );
      } catch (err) {
        Swal.fire("Error", "Failed to delete project", "error");
      }
    }
  };

  const inputClasses =
    "p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition w-full";
  const actionButtonBaseClasses =
    "p-2.5 rounded-full transition duration-300 ease-in-out hover:scale-110 active:scale-95";

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 px-4 sm:px-6 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow opacity-50" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto">
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

        {/* Admin Add Button */}
        {isAdmin && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-extrabold text-lg rounded-full shadow-2xl shadow-purple-500/30 hover:scale-[1.03] transition-all duration-300 active:scale-[0.98]"
            >
              <FaPlus
                className={`transition-transform duration-300 ${
                  showForm ? "rotate-45" : ""
                }`}
              />
              {showForm ? "Cancel Adding" : "Add New Project"}
            </button>
          </motion.div>
        )}

        {/* Add Form */}
        {isAdmin && showForm && (
          <motion.form
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleAdd}
            className="mb-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-3xl text-white"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <input
                required
                placeholder="Project Name *"
                value={newProject.name}
                onChange={(e) =>
                  setNewProject({ ...newProject, name: e.target.value })
                }
                className={inputClasses}
              />

              <label className="cursor-pointer">
                <div className="flex items-center justify-center h-full p-4 bg-white/10 border border-white/20 rounded-xl hover:border-purple-500 transition">
                  <FaImage className="mr-3 text-xl text-purple-400" />
                  <span className="text-gray-300">
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
                className={inputClasses}
              />
              <textarea
                rows={3}
                placeholder="Short Description"
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
                className={`${inputClasses} md:col-span-3`}
              />
              <input
                placeholder="Live Link"
                value={newProject.live}
                onChange={(e) =>
                  setNewProject({ ...newProject, live: e.target.value })
                }
                className={inputClasses}
              />
              <input
                placeholder="Client Repo (GitHub)"
                value={newProject.clientRepo}
                onChange={(e) =>
                  setNewProject({ ...newProject, clientRepo: e.target.value })
                }
                className={inputClasses}
              />
              <input
                placeholder="Server Repo (if any)"
                value={newProject.serverRepo}
                onChange={(e) =>
                  setNewProject({ ...newProject, serverRepo: e.target.value })
                }
                className={inputClasses}
              />
              <input
                placeholder="Challenges Faced"
                value={newProject.challenges}
                onChange={(e) =>
                  setNewProject({ ...newProject, challenges: e.target.value })
                }
                className={inputClasses}
              />
              <input
                placeholder="Future Improvements"
                value={newProject.improvements}
                onChange={(e) =>
                  setNewProject({ ...newProject, improvements: e.target.value })
                }
                className={inputClasses}
              />

              <button
                type="submit"
                className="md:col-span-3 lg:col-span-1 bg-gradient-to-r from-emerald-500 to-teal-600 py-4 rounded-xl font-extrabold text-white text-lg hover:shadow-xl hover:shadow-emerald-600/50 transition-all duration-300 active:scale-[0.98]"
              >
                Add to Portfolio
              </button>
            </div>
          </motion.form>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-white text-2xl py-20">
            Loading projects...
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center text-gray-400 text-xl py-20">
            No projects yet. {isAdmin && "Add your first one!"}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl hover:shadow-purple-600/30 transition-all duration-500 cursor-pointer flex flex-col"
              >
                <div
                  className="h-56 bg-gray-900/50 relative overflow-hidden"
                  onClick={() => setModal(project)}
                >
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
                  <div className="absolute top-4 left-4">
                    {project.stack && (
                      <span className="px-3 py-1 bg-purple-900/60 text-purple-300 text-xs rounded-full border border-purple-500/30 font-medium">
                        {project.stack.split(",")[0].trim()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-purple-300 font-medium mb-3">
                      {project.stack}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description || "No description available."}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.challenges && (
                        <span className="flex items-center px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-500/30">
                          <FaTools className="mr-1" /> {project.challenges}
                        </span>
                      )}
                      {project.improvements && (
                        <span className="flex items-center px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          <FaLightbulb className="mr-1" />{" "}
                          {project.improvements}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <button
                      onClick={() => setModal(project)}
                      className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-extrabold transition"
                    >
                      View Details <FaExternalLinkAlt className="text-sm" />
                    </button>
                    <div className="flex items-center gap-3">
                      {project.clientRepo && project.clientRepo !== "#" && (
                        <a
                          href={project.clientRepo}
                          target="_blank"
                          rel="noreferrer"
                          className={`${actionButtonBaseClasses} bg-white/10 text-white hover:bg-white/20`}
                          title="Client Repo"
                        >
                          <FaGithub className="text-lg" />
                        </a>
                      )}
                      {project.serverRepo && project.serverRepo !== "#" && (
                        <a
                          href={project.serverRepo}
                          target="_blank"
                          rel="noreferrer"
                          className={`${actionButtonBaseClasses} bg-white/10 text-white hover:bg-white/20`}
                          title="Server Repo"
                        >
                          <FaCode className="text-lg" />
                        </a>
                      )}
                      {isAdmin && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(project._id);
                          }}
                          className={`${actionButtonBaseClasses} bg-red-600/30 text-red-400 hover:bg-red-600/50`}
                          title="Delete Project"
                        >
                          <FaTrash className="text-lg" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-24 text-xl sm:text-2xl md:text-4xl font-bold text-gray-300"
        >
          I don’t just code — I{" "}
          <span className="text-white font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ship real products
          </span>{" "}
        </motion.p>
      </div>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
