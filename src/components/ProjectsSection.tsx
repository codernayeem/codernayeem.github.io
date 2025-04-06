import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Agro Care App",
    description:
      "A plant disease detection, marketplace & community app for farmers, gardeners & plant enthusiasts made with flutter and powered by Firebase and Flask. Won 'Best Project Award' from KUET CSE Department.",
    image: "images/agro_care_app.jpg",
    tags: ["Flutter", "Firebase", "ML", "Android", "Rest API", "Flask"],
    github: "https://github.com/codernayeem/agro-care-app",
    live: "https://github.com/codernayeem/agro-care-app/releases/tag/v1.0.0",
  },
  {
    title: "Fly Me Game",
    description:
      "A console based 2D game made with C++. The player controls a plane to fly through the obstacles and collect the coins.",
    image: "images/fly-me-game.png",
    tags: ["C++", "Console", "Game"],
    github: "https://github.com/codernayeem/fly-me-game",
    live: "https://github.com/codernayeem/fly-me-game",
  },
  {
    title: "Web Share Zone",
    description:
      "A web application that allows users to share files with each other. Made with Flask, HTML, CSS, JavaScript, and SQLite.",
    image: "images/web-share-zone.png",
    tags: ["Flask", "HTML", "CSS", "JavaScript", "SQLite"],
    github: "https://github.com/codernayeem/web-share-zone",
    live: "https://github.com/codernayeem/web-share-zone",
  },
  {
    title: "Kuet CSE 2K21 App",
    description:
      "A mobile app for the stident of KUET CSE 2K21 batch featuring a batchmate's list & informations, teacher's informations, routines & more. Made with Kotlin & Firebase",
    image: "images/kuet-cse-app.jpeg",
    tags: ["Kotlin", "Firebase", "Android"],
    github: "https://github.com/codernayeem",
    live: "https://github.com/codernayeem",
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
