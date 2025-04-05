import { motion } from "framer-motion";
import { FaReact, FaPython, FaGitAlt, FaJava, FaHtml5 } from "react-icons/fa";
import { SiFlutter, SiTensorflow, SiFirebase, SiKotlin } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const skills = [
  {
    name: "Flutter & Dart",
    level: 95,
    icon: SiFlutter,
    color: "#02569B",
  },
  {
    name: "Python",
    level: 90,
    icon: FaPython,
    color: "#3776AB",
  },
  {
    name: "Kotlin",
    level: 90,
    icon: SiKotlin,
    color: "#9E3BF8",
  },
  {
    name: "React & Node.js",
    level: 65,
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "TensorFlow & PyTorch",
    level: 70,
    icon: SiTensorflow,
    color: "#FF6F00",
  },
  {
    name: "Firebase",
    level: 85,
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "Git & GitHub",
    level: 90,
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "Java",
    level: 80,
    icon: FaJava,
    color: "#007396",
  },
  {
    name: "C & C++",
    level: 85,
    icon: TbBrandCpp,
    color: "#00599C",
  },
  {
    name: "HTML & CSS",
    level: 95,
    icon: FaHtml5,
    color: "#E34F26",
  },
];

const SkillsSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 md:px-20">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="space-y-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <skill.icon
                  size={24}
                  style={{ color: skill.color }}
                  className="shrink-0"
                />
                <span className="font-medium">{skill.name}</span>
              </div>

              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              UI/UX Design
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              REST APIs
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              Machine Learning
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              Jupyter Notebook
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              Databases
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsSection;
