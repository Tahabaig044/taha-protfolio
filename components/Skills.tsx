"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact />, level: 50 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
  { name: "TypeScript", icon: <SiTypescript />, level: 80 },
  // { name: "Node.js", icon: <SiNodedotjs />, level: 75 },
  { name: "Git", icon: <SiGit />, level: 60 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My Skills
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with and my proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {skills.slice(0, 3).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="ml-auto text-gray-600 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-indigo-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            {skills.slice(3).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="ml-auto text-gray-600 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-indigo-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}