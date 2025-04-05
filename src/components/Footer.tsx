import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";

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
    {
      icon: FaFacebook,
      label: "Facebook",
      link: "https://facebook.com/md.nayeem.898",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      link: "https://wa.me/+8801968199036",
    },
  ];

  const quickLinks = [
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Education", to: "education" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Md. Nayeem</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A passionate Mobile App Developer and ML Enthusiast, dedicated to
              creating innovative solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>Email: nayeem.code@gmail.com</li>
              <li>Phone: +8801968199036</li>
              <li>Location: Khulna, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Md. Nayeem. All rights reserved.
          </p>

          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-blue-500 text-white p-3 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
          >
            <FaArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
