import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 md:px-20">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate Mobile App Developer with strong expertise in
              Flutter. Currently focused on creating intuitive and performant
              mobile applications while exploring the fascinating world of
              Machine Learning. I'm also experienced in building RESTful APIs
              and working with databases.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">What I Do?</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Develop cross-platform flutter app (Android & iOS)</li>
              <li>Develop native android applications with kotlin</li>
              <li>Create responsive web applications with React</li>
              <li>Implement machine learning solutions</li>
              <li>Design user-friendly interfaces</li>
              <li>Write clean and maintainable code</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold">My Goals</h3>
          <p className="text-gray-600 dark:text-gray-300">
            I aim to leverage technology to solve real-world problems and create
            impactful solutions. My future goals include mastering AI/ML
            technologies and contributing to open-source projects that make a
            difference in people's lives.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
