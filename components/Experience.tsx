"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2021 - Present",
    description:
      "Leading the frontend development team, implementing new features, and optimizing performance.",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "WebSolutions Ltd.",
    duration: "2018 - 2021",
    description:
      "Developed responsive web applications and collaborated with designers to implement UI/UX.",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Assisted in building web applications and learned modern development practices.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Work Experience
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white z-10 mx-auto md:mx-0">
                {exp.id}
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                } mt-4 md:mt-0`}
              >
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.duration}</span>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}