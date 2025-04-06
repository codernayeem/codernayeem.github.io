import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "nayeem.code@gmail.com",
      link: "mailto:nayeem.code@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+8801968199036",
      link: "tel:+8801968199036",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Khulna, Bangladesh",
      link: "https://maps.google.com/?q=Khulna,Bangladesh",
    },
  ];

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
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form
              className="space-y-6"
              action="https://formspree.io/f/mldjojwn"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-blue-400">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {info.label}
                    </div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
