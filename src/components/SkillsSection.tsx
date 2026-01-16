import { motion } from "framer-motion";
import { FaReact, FaPython, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiFlutter, SiTensorflow, SiFirebase, SiKotlin, SiTypescript, SiNextdotjs, SiPostgresql, SiMysql, SiSwift, SiTailwindcss, SiPytorch } from "react-icons/si";

const skillCategories = [
  {
    title: "Mobile Development",
    description: "Cross-platform & native app development",
    skills: [
      { name: "Flutter", icon: SiFlutter, proficiency: "Expert" },
      { name: "Kotlin", icon: SiKotlin, proficiency: "Advanced" },
      { name: "Swift", icon: SiSwift, proficiency: "Intermediate" },
      { name: "Firebase", icon: SiFirebase, proficiency: "Advanced" },
    ],
  },
  {
    title: "Web Development",
    description: "Full-stack web applications & APIs",
    skills: [
      { name: "React", icon: FaReact, proficiency: "Advanced" },
      { name: "Next.js", icon: SiNextdotjs, proficiency: "Advanced" },
      { name: "TypeScript", icon: SiTypescript, proficiency: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: "Expert" },
    ],
  },
  {
    title: "Backend & DevOps",
    description: "APIs, databases & deployment pipelines",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: "Advanced" },
      { name: "MySQL", icon: SiMysql, proficiency: "Advanced" },
      { name: "Docker", icon: FaDocker, proficiency: "Intermediate" },
      { name: "Git & CI/CD", icon: FaGitAlt, proficiency: "Advanced" },
    ],
  },
  {
    title: "AI & Data",
    description: "Machine learning & data solutions",
    skills: [
      { name: "Python", icon: FaPython, proficiency: "Expert" },
      { name: "PyTorch", icon: SiPytorch, proficiency: "Intermediate" },
      { name: "TensorFlow", icon: SiTensorflow, proficiency: "Intermediate" },
    ],
  },
];

const proficiencyColors: Record<string, string> = {
  Expert: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Advanced: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Intermediate: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

const SkillsSection = () => {
  return (
    <div className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-4">
            Expertise
          </span>
          <h2 className="section-heading mb-4">Skills & Technologies</h2>
          <p className="section-subheading mx-auto">
            Technologies I've been working with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid - Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`card p-8 ${
                categoryIndex === 0
                  ? "lg:col-span-6"
                  : categoryIndex === 1
                  ? "lg:col-span-6"
                  : categoryIndex === 2
                  ? "lg:col-span-7"
                  : "lg:col-span-5"
              }`}
            >
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-500 text-sm">
                    {category.description}
                  </p>
                </div>

                <div className={`grid gap-4 ${categoryIndex === 0 || categoryIndex === 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="group flex items-center justify-between p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-neutral-900 shadow-sm flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:scale-110 transition-transform">
                          <skill.icon size={22} />
                        </div>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                          proficiencyColors[skill.proficiency]
                        }`}
                      >
                        {skill.proficiency}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Express.js",
              "Fastify",
              "Flask",
              "MongoDB",
              "REST APIs",
              "Prisma ORM",
              "shadcn/ui",
              "VPS Deployment",
              "cPanel",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
