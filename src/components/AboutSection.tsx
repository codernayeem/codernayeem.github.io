import { motion } from "framer-motion";
import { Code2, Lightbulb, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every pixel and millisecond for the best user experience",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Exploring cutting-edge tech to solve real-world problems",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Building solutions that make a meaningful difference",
    },
  ];

  return (
    <div className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50/50 to-transparent dark:via-neutral-900/50" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left column - Main content */}
            <div className="lg:w-3/5">
              <span className="inline-block text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-4">
                About Me
              </span>
              <h2 className="section-heading mb-6">
                Turning ideas into
                <br />
                <span className="text-gradient">digital reality</span>
              </h2>
              <div className="space-y-5 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                <p>
                  I'm a developer who believes in the power of well-crafted software to transform 
                  how people interact with technology. Currently pursuing my CS degree at{" "}
                  <span className="text-neutral-900 dark:text-neutral-200 font-medium">
                    KUET
                  </span>
                  , I specialize in building mobile applications that users genuinely enjoy.
                </p>
                <p>
                  My journey started with curiosity about how apps work, and evolved into a 
                  passion for creating them. From native Android with Kotlin to cross-platform 
                  solutions with Flutter, I've developed a diverse toolkit that allows me to 
                  choose the right technology for each unique challenge.
                </p>
                <p>
                  Beyond mobile development, I'm deeply fascinated by Machine Learning and its 
                  potential to create intelligent, adaptive applications. This combination of 
                  skills allows me to build apps that don't just function—they learn and improve.
                </p>
              </div>
            </div>

            {/* Right column - Stats/Quick facts */}
            <div className="lg:w-2/5">
              <div className="sticky top-32">
                <div className="card p-8">
                  <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-6">
                    Quick Facts
                  </h3>
                  <div className="space-y-6">
                    {[
                      { label: "Primary Focus", value: "Mobile Development" },
                      { label: "Languages", value: "Dart, Kotlin, Python" },
                      { label: "Frameworks", value: "Flutter, TensorFlow" },
                      { label: "Education", value: "CSE @ KUET" },
                    ].map((fact) => (
                      <div key={fact.label} className="flex justify-between items-center">
                        <span className="text-neutral-500 dark:text-neutral-500">
                          {fact.label}
                        </span>
                        <span className="font-medium text-neutral-900 dark:text-neutral-100">
                          {fact.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
