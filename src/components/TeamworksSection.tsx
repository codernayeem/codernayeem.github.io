import { motion } from "framer-motion";
import { FaTrophy, FaUsers } from "react-icons/fa";

const achievements = [
  {
    type: "competition",
    title: "Game of Datathon - Bitfest 2025",
    description:
      "Trained a ml model to predict maching score of the job requirements and the candidate's information. Won 'KUET Rising Team' award in the Game of Datathon competition at Bitfest 2025. Hosted by Department of CSE, KUET",
    image: "images/bitfest-datathon-25.jpg",
    role: "Machine Learning Engineer",
    date: "January 2025",
    icon: FaTrophy,
  },
  {
    type: "competition",
    title: "5th Kibo Robot Programming Challenge",
    description:
      "1st place in the national level and 3rd place in the international level competition. Programmed a robot to navigate, procees images, and complete tasks. Hosted by Japan Aerospace Exploration Agency (JAXA).",
    image: "images/kibo-rpc5.jpg",
    role: "Core Contributor",
    date: "December 2024",
    icon: FaTrophy,
  },
  {
    type: "competition",
    title: "SynergyX2024 Datathon Competition",
    description:
      "Hosted by Displine of CS, Khulna University. Trained a ml model on the provided dataset. Placed 5th in the competition.",
    image: "images/ku-datathon.png",
    role: "Machine Learning Engineer",
    date: "November 2024",
    icon: FaTrophy,
  },
  {
    type: "competition",
    title: "Hult Prize Kuet 2024",
    description:
      "Proposed a solution for the farming community in Bangladesh. I developed the mobile app (MVP) for the competition. We became the 1st runner up in the competition.",
    image: "images/hult-24.jpeg",
    role: "Mobile App Developer",
    date: "February 2024",
    icon: FaTrophy,
  },
];

const TeamworksSection = () => {
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
          Team Works & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <item.icon size={20} />
                    <span className="text-sm uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-col space-y-2 text-sm">
                  {item.role && (
                    <div className="flex items-center space-x-2">
                      <FaUsers size={16} className="text-blue-500" />
                      <span>{item.role}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamworksSection;
