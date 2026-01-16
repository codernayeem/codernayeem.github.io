import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Khulna University of Engineering & Technology (KUET)",
    duration: "2023 - Present",
    status: "Ongoing",
    description:
      "Focused on software engineering, data structures, algorithms, and machine learning. Active participant in programming competitions and hackathons.",
    achievements: [
      "Best Project Award (Android App Development)",
      "Current CGPA: 3.96/4.00",
    ],
    logo: "🎓",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Narayanganj College",
    duration: "2020 - 2022",
    status: "Completed",
    description:
      "Science group with focus on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving foundations.",
    achievements: [
      "GPA: 5.00/5.00",
      "Active in science olympiads and competitions",
    ],
    logo: "📚",
  },
];

const EducationSection = () => {
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
            Background
          </span>
          <h2 className="section-heading mb-4">Education & Qualifications</h2>
          <p className="section-subheading mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-20" />

          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)]"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 ring-4 ring-white dark:ring-neutral-900 z-10`}
              />

              {/* Content card */}
              <div className="ml-20 md:ml-0">
                <div className="card p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center text-2xl shrink-0">
                      {item.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                          {item.status}
                        </span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-500">
                          {item.duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 leading-tight">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-indigo-500 dark:text-indigo-400 mt-1">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Award
                          size={14}
                          className="text-amber-500 shrink-0"
                        />
                        <span className="text-neutral-600 dark:text-neutral-400">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          {[
            {
              icon: GraduationCap,
              title: "Academic Excellence",
              description: "Maintaining 3.96+ CGPA",
            },
            {
              icon: Award,
              title: "Project Recognition",
              description: "Best Project Award Winner",
            },
            {
              icon: BookOpen,
              title: "Continuous Learning",
              description: "Always exploring new tech",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50"
            >
              <item.icon
                size={28}
                className="mx-auto mb-3 text-indigo-500 dark:text-indigo-400"
              />
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSection;
