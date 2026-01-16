import { motion } from "framer-motion";
import { ExternalLink, Github, Award } from "lucide-react";

const projects = [
  {
    title: "Agro Care App",
    description:
      "AI-powered plant disease detection with marketplace & community features for farmers. Won 'Best Project Award' from KUET CSE Department.",
    image: "images/agro_care_app.jpg",
    tags: ["Flutter", "Firebase", "ML", "Flask"],
    github: "https://github.com/codernayeem/agro-care-app",
    live: "https://github.com/codernayeem/agro-care-app/releases/tag/v1.0.0",
    featured: true,
    award: "Best Project Award",
  },
  {
    title: "ProjectBuddy",
    description:
      "LinkedIn-style social platform for students to connect, collaborate on teams with role-based permissions, share posts, and manage projects together. Built with React, TypeScript, PostgreSQL & Prisma.",
    image: "images/project-buddy.png",
    tags: ["React", "TypeScript", "PostgreSQL", "Prisma", "Express"],
    github: "https://github.com/codernayeem/ProjectBuddy",
    live: "https://github.com/codernayeem/ProjectBuddy",
    featured: false,
    award: null,
  },
  {
    title: "KUET CSE 2K21",
    description:
      "Comprehensive mobile app for KUET CSE 2K21 batch with student directory, faculty info, class routines and more.",
    image: "images/kuet-cse-app.jpeg",
    tags: ["Kotlin", "Firebase", "Android"],
    github: "https://github.com/codernayeem",
    live: "https://github.com/codernayeem",
    featured: false,
  },
  {
    title: "Web Share Zone",
    description:
      "Secure file sharing web application with intuitive UI and real-time transfer capabilities.",
    image: "images/web-share-zone.png",
    tags: ["Flask", "JavaScript", "SQLite"],
    github: "https://github.com/codernayeem/web-share-zone",
    live: "https://github.com/codernayeem/web-share-zone",
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 via-transparent to-neutral-50/50 dark:from-neutral-900/50 dark:via-transparent dark:to-neutral-900/50" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            A selection of projects that showcase my skills and passion for building
          </p>
        </motion.div>

        {/* Featured Project - Large card */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="card overflow-hidden group">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" />
                  
                  {/* Award badge */}
                  {featuredProject.award && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-amber-500 text-white text-sm font-medium rounded-full">
                      <Award size={14} />
                      {featuredProject.award}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-2">
                    Featured Project
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      <Github size={20} />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects - Asymmetric grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card overflow-hidden group ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full text-neutral-900 hover:bg-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full text-neutral-900 hover:bg-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-500 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/codernayeem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
          >
            <span>View more on GitHub</span>
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
