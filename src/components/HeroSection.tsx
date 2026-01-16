import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-scroll";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800/50 text-sm font-medium border border-neutral-200 dark:border-neutral-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open for opportunities
          </span>
        </motion.div>

        {/* Profile image */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 animate-pulse" />
            <img
              src="https://avatars.githubusercontent.com/u/65258767?s=400&u=36991f6fe32045d3a493e3e913e7e28b4a2b0a68&v=4"
              alt="Md. Nayeem - Mobile App Developer"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-neutral-900"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Md. Nayeem
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-6 font-medium"
        >
          Mobile App Developer{" "}
          <span className="text-neutral-400 dark:text-neutral-600">·</span>{" "}
          <span className="text-gradient">ML Engineer</span>
        </motion.p>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-neutral-500 dark:text-neutral-500 mb-8"
        >
          <MapPin size={16} />
          <span>Khulna, Bangladesh</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting elegant mobile experiences with Flutter & Kotlin. 
          Passionate about building AI-powered solutions that make a real difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn-primary cursor-pointer"
          >
            <Sparkles size={18} />
            Let's Connect
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn-secondary cursor-pointer"
          >
            View My Work
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: FaGithub, href: "https://github.com/codernayeem", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/nayeem898", label: "LinkedIn" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300"
            >
              <social.icon size={22} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-400"
            >
              <ArrowDown size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
