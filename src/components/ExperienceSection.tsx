import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Co-Founder & COO",
    company: "AlgoOasis",
    companyUrl: "https://algo-oasis.com/",
    logo: "images/algo-oasis.png",
    location: "Khulna, Bangladesh",
    type: "Full-time",
    duration: "Oct 2025 - Present",
    current: true,
    description:
      "Co-founded a software agency delivering web apps, mobile solutions, and SaaS products. Leading operations, client relations, and project delivery while contributing to technical architecture and development.",
    highlights: [
      "Built and deployed multiple client projects including event management systems and research platforms",
      "Established development workflows and CI/CD pipelines for efficient delivery",
      "Managing cross-functional team and ensuring quality across all deliverables",
    ],
    skills: ["Next.js", "React", "Flutter", "PostgreSQL", "Project Management"],
  },
  {
    title: "Mobile Application Developer",
    company: "Transforms AI",
    companyUrl: "https://transformsai.com/",
    logo: "images/transforms-ai.png",
    location: "Hybrid",
    type: "Part-time",
    duration: "Feb 2025 - Nov 2025",
    current: false,
    description:
      "Led end-to-end development of Android and iOS applications — including system design, implementation, and deployment to Google Play and the App Store.",
    highlights: [
      "Developed cross-platform apps with Flutter and native apps with Kotlin & Swift",
      "Handled complete app lifecycle from design to store deployment",
      "Collaborated with AI team to integrate intelligent features into mobile products",
    ],
    skills: ["Flutter", "Kotlin", "Swift", "Firebase", "App Store Deployment"],
  },
];

const ExperienceSection = () => {
  return (
    <div className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50/50 to-transparent dark:via-neutral-900/50" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-4">
            Experience
          </span>
          <h2 className="section-heading mb-4">Work History</h2>
          <p className="section-subheading mx-auto">
            Professional experience building real-world products
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-neutral-100 dark:bg-neutral-800 overflow-hidden flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-indigo-500 dark:text-indigo-400 hover:underline"
                      >
                        <Building2 size={14} />
                        {exp.company}
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-500 text-right">
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <MapPin size={14} />
                        {exp.location} · {exp.type}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
