import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import namasteReact from '../assets/c1.png';
import ibmWebDev from '../assets/c2.png';
import freeCodeCamp from '../assets/c3.png';
import Intern from '../assets/c4.png';
import Hackathon from '../assets/Hackathon.jpg';
import Cohort from '../assets/cohort.jpg';

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Development Intern",
      issuer: "InLighnX Global Pvt. Ltd.",
      date: "July 2025 – October 2024",
      credentialId: "Internship Certificate",
      image: Intern,
      link: Intern
    },
    {
      title: "Namaste React",
      issuer: "Akshay Saini",
      date: "2024",
      credentialId: "Namaste React Completion",
      image: namasteReact,
      link: namasteReact
    },
    {
      title: "Web Development Fundamentals",
      issuer: "IBM",
      date: "2024",
      credentialId: "IBM Web Development Fundamentals",
      image: ibmWebDev,
      link: ibmWebDev
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      credentialId: "freeCodeCamp Responsive Web Design",
      image: freeCodeCamp,
      link: freeCodeCamp
    },
    {
      title: "National Showdown of Code & Creativity",
      issuer: "Sheriyans Coding School",
      date: "Aug 2025",
      credentialId: "Issued by Sheriyans Coding School",
      image: Hackathon,
      link: Hackathon
    },
    {
      title: "Job Ready Cohort - Certificate of Completion",
      issuer: "Sheriyans Coding School",
      date: "Sep 2025",
      credentialId: "Issued by Sheriyans Coding School",
      image: Cohort,
      link: Cohort
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Certifications
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center gap-2"
          >
            <FaAward className="text-yellow-500 text-2xl" />
            <p className="text-lg text-gray-600 dark:text-gray-300">My Professional Achievements</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <FaCertificate className="text-white text-4xl" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Issued by:</span> {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Date:</span> {cert.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 