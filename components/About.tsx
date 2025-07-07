"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaUserTie, FaHeart } from "react-icons/fa";

const cardData = [
  {
    icon: <FaGraduationCap className="text-3xl text-indigo-600" />,
    title: "Education",
    description: "Commerce degree from Liaquat College",
  },
  {
    icon: <FaUserTie className="text-3xl text-indigo-600" />,
    title: "Background",
    description: "1+ years of experience in web development",
  },
  {
    icon: <FaHeart className="text-3xl text-indigo-600" />,
    title: "Interests",
    description: "UI/UX developer, web design, and coding",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, education, and passions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-700 rounded-xl shadow-md p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            My Story
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A highly motivated web developer with a generative Al
            Course . Possesses strong problem-solving abilities, competitive
            programming experience, and a solid foundation web development
            methodologies. Seeking an entry-level role to contribute to a
            dynamic web development team.
          </p>
          {/* <p className="text-gray-600 dark:text-gray-300">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
