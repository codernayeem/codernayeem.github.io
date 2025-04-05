import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20 gap-10 pt-28">
      <motion.img
        src="https://avatars.githubusercontent.com/u/65258767?s=400&u=36991f6fe32045d3a493e3e913e7e28b4a2b0a68&v=4"
        alt="Md. Nayeem"
        className="rounded-full w-56 h-56 object-cover shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Md. Nayeem</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Mobile App Developer | ML Enthusiast | Flutter & Python
        </p>

        <div className="flex justify-center md:justify-start space-x-4 mb-6">
          <a
            href="https://github.com/codernayeem"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} className="hover:text-gray-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/nayeem898"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} className="hover:text-indigo-400" />
          </a>
          <a
            href="https://facebook.com/md.nayeem.898"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={24} className="hover:text-blue-500" />
          </a>
          <a
            href="https://wa.me/+8801968199036"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={24} className="hover:text-green-500" />
          </a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-block bg-indigo-500 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-800 transition-all"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
