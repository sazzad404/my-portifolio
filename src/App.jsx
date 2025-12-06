import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";

export default function App() {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollTo = (key) => {
    refs[key].current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-gray-100 scroll-smooth">
      <Navbar onNav={scrollTo} />
      <main className="">
        <section ref={refs.home}><Hero /></section>
        <section ref={refs.about}><About /></section>
        <section ref={refs.skills}><Skills /></section>
        <section ref={refs.education}><Education /></section>
        <section ref={refs.projects}><Projects /></section>
        <section ref={refs.contact}><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
