import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import youtubeClone from '../assets/image.png';
import foodify from '../assets/Screenshot 2025-06-17 214119.png';
import profileDashboard from '../assets/Screenshot 2025-06-17 215217.png';
import ochiClone from '../assets/Screenshot 2025-06-17 220055.png';

const Projects = () => {
  const projects = [
    {
      title: "MyYouTube – YouTube Clone",
      description: "A responsive YouTube clone with real-time video search, playback, and category filtering. Features a modern UI built with React, Redux, and Tailwind CSS.",
      image: youtubeClone,
      technologies: ["React", "Redux Toolkit", "Tailwind CSS", "YouTube Data API"],
      github: "https://github.com/atif-afsar/My-Youtube",
      live: "https://my-youtube0.netlify.app/"
    },
    {
      title: "Foodify – Modern Food Delivery Website",
      description: "A Swiggy-inspired modern food delivery app with interactive UI and smart cart functionality. Users can browse dynamic menus and place orders with ease.",
      image: foodify,
      technologies: ["React", "Tailwind CSS", "Redux Toolkit", "Swiggy API"],
      github: "https://github.com/atif-afsar/Foodify",
      live: "https://68603e3001fb0b1deb38e5a0--foodify-atif.netlify.app/"
    },
    {
      title: "Profile Dashboard",
      description: "A sleek and responsive dashboard with reusable UI components, interactive map integration, dynamic search/filter, admin controls, and profile views.",
      image: profileDashboard,
      technologies: ["React", "Tailwind CSS", "React Router"],
      github: "https://github.com/atif-afsar/Profile-Dashboard",
      live: "https://profile-deshboard.netlify.app/"
    },
    {
      title: "Ochi Site Clone",
      description: "A high-performance single-page clone of the Ochi design agency's website. It features smooth scroll-based animations, interactive visuals, and a clean UI tone — all crafted with attention to fluid UX and responsive design.",
      image: ochiClone,
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP", "Locomotive Scroll"],
      github: "https://github.com/atif-afsar/ochi",
      live: "https://ochi-clone-design.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              whileHover={{ y: -5 }}
            >
              {/* Image Container with Gradient Overlay */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-4 h-4" />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 