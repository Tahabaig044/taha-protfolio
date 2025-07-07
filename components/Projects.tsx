"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with  Next.js, and MongoDB",
    tags: ["Next Js", "Shadcn", "MongoDB"],
    github: "https://github.com/Tahabaig044/luxury_store",
    live: "https://luxury-store-six.vercel.app/",
    image: "/p1.png",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "",
    image: "/p2.png",
  },
  {
    title: "E-commerce ",
    description: "A full-stack e-commerce solution with  Next.js, and Wix",
    tags: ["Next js", "Wix", "Shedcn UI"],
    github: "https://github.com/Tahabaig044/web-e-com",
    live: "https://web-e-com.vercel.app/",
    image: "/p3.png",
  },
  {
    title: "E-commerce Dashboard",
    description: "A Admin-Dasboard e-commerce solution with  Next.js, and MongoDB",
    tags: ["Next js", "MongoDB", "TypeScript"],
    github: "https://github.com/Tahabaig044/luxury_admin",
    live: "https://luxury-admin-one.vercel.app/",
    image: "/p4.png",
  },
  {
    title: "Rusume Builder",
    description: "A resume builder application that allows users to create and download resumes",
    tags: ["Html", "Css", "JavaScript"],
    github: "https://github.com/Tahabaig044/resume_builder",
    live: "https://resume-builder-ivory-nu.vercel.app/",
    image: "/p5.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My Projects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Some of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-600 relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                >
                  <a
                    href={project.github}
                    className="text-white hover:text-indigo-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.live}
                    className="text-white hover:text-indigo-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="text-2xl" />
                  </a>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}