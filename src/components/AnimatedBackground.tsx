import { motion } from "framer-motion";
import { FaReact, FaPython, FaGitAlt, FaJava, FaHtml5 } from "react-icons/fa";
import { SiFlutter, SiTensorflow, SiFirebase, SiKotlin } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const skills = [
  {
    icon: <SiFlutter size={60} />,
    color: "text-blue-500",
    position: "top-24 left-1/2 -translate-x-1/2",
  },
  {
    icon: <FaPython size={60} />,
    color: "text-yellow-500",
    position: "top-1/4 left-1/4",
  },
  {
    icon: <SiKotlin size={60} />,
    color: "text-purple-500",
    position: "top-1/4 right-1/4",
  },
  {
    icon: <FaReact size={60} />,
    color: "text-blue-400",
    position: "left-8 top-1/2 -translate-y-1/2",
  },
  {
    icon: <SiTensorflow size={60} />,
    color: "text-orange-500",
    position: "right-8 top-1/2 -translate-y-1/2",
  },
  {
    icon: <SiFirebase size={60} />,
    color: "text-yellow-400",
    position: "bottom-1/4 left-1/4",
  },
  {
    icon: <FaGitAlt size={60} />,
    color: "text-orange-400",
    position: "bottom-16 left-1/2 -translate-x-1/2",
  },
  {
    icon: <FaJava size={60} />,
    color: "text-red-500",
    position: "bottom-1/4 right-1/4",
  },
  {
    icon: <TbBrandCpp size={60} />,
    color: "text-blue-600",
    position: "top-1/2 left-1/3 -translate-y-1/2",
  },
  {
    icon: <FaHtml5 size={60} />,
    color: "text-orange-600",
    position: "top-1/2 right-1/3 -translate-y-1/2",
  },
];

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className={`absolute ${skill.color} ${skill.position} opacity-[0.05]`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.05, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          {skill.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
