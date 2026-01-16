import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/codernayeem",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/nayeem898",
    },
  ];

  const quickLinks = [
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Achievements", to: "teamworks" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand section */}
          <div className="md:col-span-5">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Md. Nayeem
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Developer based in Bangladesh who loves building mobile apps, web platforms, 
              and everything in between. Always learning, always shipping.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
              <p>
                <a
                  href="mailto:nayeem.code@gmail.com"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  nayeem.code@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+8801968199036"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  +880 1968 199036
                </a>
              </p>
              <p>Khulna, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-500 flex items-center gap-1">
            © {new Date().getFullYear()} Md. Nayeem
          </p>

          {/* Back to top button */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="group flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center group-hover:border-neutral-900 dark:group-hover:border-neutral-100 transition-colors">
              <ArrowUp size={14} />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
