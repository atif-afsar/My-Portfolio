import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaPalette,
  FaMobile,
  FaServer,
  FaTools,
  FaDatabase,
  FaGitAlt,
  FaJs,
  FaPython,
  FaJava,
  FaNodeJs,
  FaFire,
  FaBrain,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";
import { SiMongodb, SiRedux, SiTailwindcss, SiFirebase } from "react-icons/si";

const About = () => {
  const technicalSkills = [
    { icon: FaJs, name: "JavaScript", level: "Advanced" },
    { icon: FaPython, name: "Python", level: "Intermediate" },
    { icon: FaJava, name: "Java", level: "Intermediate" },
    { icon: FaReact, name: "React.js", level: "Advanced" },
    { icon: FaNodeJs, name: "Node.js", level: "Intermediate" },
    { icon: FaServer, name: "Express.js", level: "Intermediate" },
    { icon: SiMongodb, name: "MongoDB", level: "Intermediate" },
    { icon: FaGitAlt, name: "Git", level: "Advanced" },
    { icon: FaGitAlt, name: "GitHub", level: "Advanced" },
    { icon: SiTailwindcss, name: "Tailwind CSS", level: "Advanced" },
    { icon: SiRedux, name: "Redux Toolkit", level: "Intermediate" },
    { icon: SiFirebase, name: "Firebase", level: "Intermediate" },
  ];

  const coreSubjects = [
    { icon: FaBrain, name: "Data Structures & Algorithms", level: "Advanced" },
    {
      icon: FaDatabase,
      name: "Database Management Systems",
      level: "Intermediate",
    },
    { icon: FaTools, name: "Machine Learning", level: "Intermediate" },
  ];

  const softSkills = [
    { icon: FaLightbulb, name: "Problem-Solving", level: "Advanced" },
    { icon: FaUsers, name: "Teamwork", level: "Advanced" },
    { icon: FaUsers, name: "Communication", level: "Advanced" },
    { icon: FaClock, name: "Time Management", level: "Advanced" },
    { icon: FaCheckCircle, name: "Adaptability", level: "Advanced" },
    { icon: FaCheckCircle, name: "Attention to Detail", level: "Advanced" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const SkillCard = ({ icon: Icon, name, level }) => (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hoverable group border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-200 dark:hover:border-blue-700"
    >
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-blue-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
            {name}
          </h4>
          <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
            {level}
          </p>
        </div>
      </div>
    </motion.div>
  );

  const SkillSection = ({ title, skills, icon: Icon }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-4 sm:space-y-6"
    >
      <div className="flex items-center space-x-3 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-blue-900 flex items-center justify-center shadow-sm">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
              Full Stack Developer & B.Tech CSE Student
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a highly motivated and detail-oriented Full Stack Developer and
              B.Tech CSE student with a passion for building modern, scalable
              web applications. I specialize in creating seamless user
              experiences with React, Tailwind CSS, Framer Motion, and GSAP,
              while also developing robust backend systems using Node.js,
              Express, and MongoDB. I thrive on solving real-world problems
              through clean, maintainable, and efficient code, ensuring both
              performance and visual excellence. Always eager to learn and
              explore emerging technologies, I aim to bridge design and
              functionality to deliver impactful digital experiences.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.a
                href="#contact"
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition-colors hoverable shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="/assets/resume.pdf"
                download="Atif_Afsar_Resume.pdf"
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 text-sm sm:text-base font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors hoverable shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
            <SkillSection
              title="Technical Skills"
              skills={technicalSkills}
              icon={FaCode}
            />
            <SkillSection
              title="Core Subjects"
              skills={coreSubjects}
              icon={FaBrain}
            />
            <SkillSection
              title="Soft Skills"
              skills={softSkills}
              icon={FaUsers}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
