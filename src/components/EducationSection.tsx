import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Khulna University of Engineering & Technology (KUET)",
    duration: "2023 - Present",
    description: "Focusing on Mobile App Development and Machine Learning.",
    achievements: [
      "Best Project Award (Android App Development)",
      "Current CGPA: 3.95/4.00",
    ],
    icon: FaGraduationCap,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Narayangang College",
    duration: "2022",
    description: "Completed HSC with a focus on Science and Mathematics.",
    achievements: [
      "Achieved GPA: 5.00/5.00 in Science Group",
      "Participated in various science fairs and competitions",
    ],
    icon: FaGraduationCap,
  },
];

const EducationSection = () => {
  return (
    <div className="min-h-screen py-20 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education & Qualifications
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />

          {/* Education items */}
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              className="relative mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-500 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <item.icon className="text-white" size={16} />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.degree}
                    </h3>
                    <div className="text-blue-500 dark:text-blue-400 mb-2">
                      {item.institution}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                      {item.duration}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default EducationSection;
