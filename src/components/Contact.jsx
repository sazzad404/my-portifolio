// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBriefcase,
  FaFacebook,
} from "react-icons/fa";

// তোমার EmailJS থেকে এই তিনটা কপি করে বসাও
const SERVICE_ID = "service_40wieze";
const TEMPLATE_ID = "template_fc99dsw";
const PUBLIC_KEY = "Jx64Kkg4GnWEjc7ay";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    setLoading(true);
    setStatus("Sending your message...");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: `${form.message}\n\n---\nThis message was sent from Sazzad's portfolio site.`,
        },
        PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Oops! Failed to send. Try again");
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setLoading(false);
    }
  };

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
    <section
      id="contact"
      className="py-20 lg:py-32 px-6 bg-black relative overflow-hidden"
    >
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
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Connect
            </span>
          </h2>
          <div className="mt-6 w-40 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Open for freelance, full-time or collaboration opportunities
          </p>
        </motion.div>

        {/* HIRE ME Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <button
            onClick={hireMe}
            className="group inline-flex items-center gap-5 px-14 py-7 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white text-3xl font-black rounded-full shadow-2xl hover:shadow-emerald-500/60 transform hover:scale-110 transition-all duration-500"
          >
            <FaBriefcase className="text-4xl group-hover:animate-bounce" />
            HIRE ME
            <FaPaperPlane className="text-2xl group-hover:translate-x-3 transition" />
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            Click → Gmail opens with pre-filled message
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border border-white/10 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">
                Get in Touch
              </h3>
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl group-hover:scale-110 transition">
                    <FaEnvelope className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">
                      sazzadhasan313@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl group-hover:scale-110 transition">
                    <FaPhoneAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone / WhatsApp</p>
                    <p className="text-white font-medium">+880 1751-314078</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-gray-400 mb-6">Follow me</p>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/sazzad404"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-110 transition"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-sazzad-hasan/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-110 transition"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/sazzad.hossain.384188"
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-110 transition"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">
                Send a Message
              </h3>

              <form onSubmit={sendMessage} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                  disabled={loading}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                  disabled={loading}
                />
                <textarea
                  rows={6}
                  placeholder="Your Message..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition resize-none"
                  disabled={loading}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-5 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 ${
                    loading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                  }`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>

                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-lg font-bold mt-6 px-6 py-4 rounded-2xl border ${
                      status.includes("successfully") || status.includes("sent")
                        ? "text-emerald-400 bg-emerald-900/30 border-emerald-500/50"
                        : "text-red-400 bg-red-900/30 border-red-500/50"
                    }`}
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24 text-2xl md:text-4xl font-bold text-gray-300"
        >
          Available for hire • Ready to build something{" "}
          <span className="text-white font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            extraordinary
          </span>
        </motion.p>
      </div>
    </section>
  );
}
