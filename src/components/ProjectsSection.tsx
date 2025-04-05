import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Agro Care App",
    description:
      "An marketplace & community app for farmers, gardeners & plant enthusiasts made with flutter and powered by Firebase and Flask.",
    image: "agro_care_app.jpg",
    tags: ["Flutter", "Firebase", "ML", "Android", "Rest API", "Flask"],
    github: "https://github.com/codernayeem/agro-care-app",
    live: "https://github.com/codernayeem/agro-care-app/releases/tag/v1.0.0",
  },
  {
    title: "AI Image Generator",
    description:
      "A web application that uses machine learning to generate unique images from text descriptions. Built with Python, TensorFlow, and React.",
    image: "https://picsum.photos/1000/700/",
    tags: ["Python", "TensorFlow", "React", "Flask"],
    github: "https://github.com/username/ai-image-generator",
    live: "https://ai-image-generator.example.com",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative task management platform with real-time updates, team chat, and project analytics.",
    image: "https://picsum.photos/1000/900/",
    tags: ["Flutter", "Firebase", "GraphQL"],
    github: "https://github.com/username/task-manager",
    live: "https://task-manager.example.com",
  },
  {
    title: "Smart Home IoT Dashboard",
    description:
      "A dashboard for monitoring and controlling IoT devices in a smart home environment. Features real-time data visualization.",
    image: "https://picsum.photos/1000/850/",
    tags: ["React", "Node.js", "MongoDB", "MQTT"],
    github: "https://github.com/username/smart-home",
    live: "https://smart-home.example.com",
  },
];

const ProjectsSection = () => {
  return (
    <div className="min-h-screen py-20 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute scale-110 bg-gray-900/80 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-500 hover:scale-110 transition-all"
                  >
                    <FaGithub size={20} className="text-gray-900" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-500 hover:scale-105 transition-all"
                  >
                    <FaExternalLinkAlt size={20} className="text-gray-900" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
