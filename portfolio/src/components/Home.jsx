import React, { useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import profileImage from "../assets/profile.jpeg";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left space-y-6 sm:space-y-8 relative z-10"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Atif Afsar
                </span>
              </motion.h1>
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "Backend Developer",
                    "Full Stack Developer",
                    "Web Developer",
                    "MERN Developer",
                  ]}
                  loop={0} // 0 = infinite
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Creating web applications that are visually appealing, highly
                interactive, and fully scalable.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a
                href="#projects"
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 text-sm sm:text-base font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
              <motion.a
                href="https://github.com/atif-afsar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/atif-afsar-64903b33a/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
              <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                  background: {
                    color: {
                      value: "transparent",
                    },
                  },
                  fpsLimit: 60,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 100,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#3b82f6",
                    },
                    links: {
                      color: "#3b82f6",
                      distance: 150,
                      enable: true,
                      opacity: 0.2,
                      width: 1,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: true,
                      speed: 1,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 40,
                    },
                    opacity: {
                      value: 0.3,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 3 },
                    },
                  },
                  detectRetina: true,
                }}
                className="absolute inset-0"
              />
              <img
                src={profileImage}
                alt="Atif Afsar"
                className="relative w-full h-full object-cover rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
