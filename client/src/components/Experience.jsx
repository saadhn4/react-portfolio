import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Abu Dhabi Indian School",
    period: "2008 - 2022",
    description:
      "Attending Abu Dhabi Indian School (ADIS) was a formative phase in my life, providing a strong foundation in academics, discipline, and personal growth. The school’s structured CBSE curriculum fostered a deep understanding of various subjects while emphasizing critical thinking and problem-solving.",
  },
  {
    company: "ISTTM Degree College",
    period: "2022 - 2025",
    description:
      "I am currently pursuing a Bachelor of Computer Applications (BCA) at ISTTM Degree College, where I am gaining a strong foundation in computer science, programming, and software development. The curriculum is designed to provide hands-on experience in web development, database management, data structures, networking, and cybersecurity, equipping me with both theoretical knowledge and practical skills.",
  },
  {
    company: "Code For India",
    period: "2024 - Present",
    description:
      "Currently, I am expanding my expertise in full-stack web development by learning the MERN stack (MongoDB, Express.js, React.js, Node.js) in India. This journey has given me hands-on experience in building dynamic, scalable, and high-performance web applications. I have developed projects including CLI tools, a Medium-like blogging platform, and a React-based portfolio, applying concepts such as REST APIs, authentication, state management, and database operations. Through this learning process, I have gained a deeper understanding of frontend and backend integration, API handling, and deployment strategies.",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Education
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
