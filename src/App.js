import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <main className="px-4 py-10 max-w-4xl mx-auto">
      <motion.h1 className="text-4xl md:text-5xl font-bold mb-2"
        initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        Yaswanth Senthil Kumar Thilagavathi
      </motion.h1>
      <p className="text-lg text-gray-300 mb-6">
        Full-Stack Developer | UI/UX Designer | iOS Developer | Data & Insights Explorer
      </p>
      <div className="flex gap-4 mb-10">
        <a href="mailto:yaswanthst9734@gmail.com"
          className="bg-white text-indigo-700 px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition">
          Hire Me
        </a>
        <a href="/resume.pdf" download
          className="bg-indigo-600 px-4 py-2 rounded-full font-semibold hover:bg-indigo-700">
          Download Resume
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-300">
          I’m a passionate Full-Stack Developer and UI/UX enthusiast studying at Kumaraguru College of Technology (CSE KCT'27).
          As Joint Secretary of DA CSE, I lead initiatives to foster tech innovation. I specialize in the MERN stack,
          iOS development (Apple Swift Challenge '25), and am currently exploring Data Science & Visualization.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">ADUPANKARAI</h3>
            <p className="text-gray-400">
              Smart Recipe Suggestion App for SDG-3. Built in a 30-hour hackathon to promote health and reduce food waste.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">UAV Object Detection</h3>
            <p className="text-gray-400">
              Drone-based detection and counting system for disaster zones (SAE Aerothon 2024).
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">AlgoVish</h3>
            <p className="text-gray-400">
              A SwiftUI visualizer to understand DSA fundamentals. Submitted for Apple Swift Challenge 2025.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Resume Preview</h2>
        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="500px"
          className="rounded-lg border border-gray-600"
        ></iframe>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 rounded bg-gray-700 text-white" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700 text-white" />
          <textarea placeholder="Message" rows="4" className="w-full p-2 rounded bg-gray-700 text-white"></textarea>
          <button type="submit" className="bg-indigo-600 px-4 py-2 rounded-full font-semibold hover:bg-indigo-700">
            Send Message
          </button>
        </form>
      </section>

      <footer className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="https://linkedin.com/in/yaswanth-st" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/Yaswanth-st" className="hover:underline">GitHub</a>
          <a href="https://yaswanth.netlify.app" className="hover:underline">Portfolio</a>
        </div>
        &copy; 2025 Yaswanth ST. All rights reserved.
      </footer>
    </main>
  );
};

export default App;