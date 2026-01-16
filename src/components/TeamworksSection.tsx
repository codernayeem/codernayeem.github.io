import { motion } from "framer-motion";
import { Trophy, Medal, Users, Calendar } from "lucide-react";

const achievements = [
  {
    title: "5th Kibo Robot Programming Challenge",
    organization: "JAXA (Japan Aerospace Exploration Agency)",
    description:
      "1st place nationally & 3rd internationally. Programmed a robot to navigate, process images, and complete complex autonomous tasks in space simulation.",
    image: "images/kibo-rpc5.jpg",
    role: "Core Contributor",
    date: "December 2024",
    highlight: "🥇 National Champion",
    position: "1st National / 3rd International",
  },
  {
    title: "Game of Datathon - Bitfest 2025",
    organization: "Department of CSE, KUET",
    description:
      "Developed ML model for job-candidate matching score prediction. Recognized as 'KUET Rising Team' among participants.",
    image: "images/bitfest-datathon-25.jpg",
    role: "ML Engineer",
    date: "January 2025",
    highlight: "⭐ Rising Team Award",
    position: "Rising Team Award",
  },
  {
    title: "SynergyX2024 Datathon",
    organization: "Discipline of CS, Khulna University",
    description:
      "Competed in data science competition with custom ML pipeline. Achieved top 5 placement among numerous teams.",
    image: "images/ku-datathon.png",
    role: "ML Engineer",
    date: "November 2024",
    highlight: "🏆 Top 5",
    position: "5th Place",
  },
  {
    title: "Hult Prize KUET 2024",
    organization: "Hult Prize Foundation",
    description:
      "Proposed innovative farming solution for Bangladesh. Developed the MVP mobile application that secured 1st Runner Up position.",
    image: "images/hult-24.jpeg",
    role: "App Developer",
    date: "February 2024",
    highlight: "🥈 1st Runner Up",
    position: "1st Runner Up",
  },
];

const TeamworksSection = () => {
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
            Achievements
          </span>
          <h2 className="section-heading mb-4">Competitions & Teamwork</h2>
          <p className="section-subheading mx-auto">
            Collaborative projects and competitions that pushed my limits
          </p>
        </motion.div>

        {/* Achievements - Bento-style asymmetric grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card overflow-hidden group ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              {/* Image section */}
              <div className={`relative overflow-hidden ${index === 0 ? "h-64" : "h-44"}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Position badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-sm font-semibold rounded-full text-neutral-900 dark:text-neutral-100">
                    <Trophy size={14} className="text-amber-500" />
                    {item.position}
                  </span>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-neutral-300 mb-1">{item.organization}</p>
                  <h3 className="text-lg font-semibold text-white line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${index === 0 ? "flex-1" : ""}`}>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-500">
                    <Users size={14} />
                    <span>{item.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-500">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Trophy, label: "Competitions", value: "4+" },
            { icon: Medal, label: "Awards Won", value: "5+" },
            { icon: Users, label: "Team Projects", value: "6+" },
            { icon: Calendar, label: "Years Active", value: "2+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800"
            >
              <stat.icon
                size={24}
                className="mx-auto mb-3 text-neutral-400 dark:text-neutral-600"
              />
              <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamworksSection;
