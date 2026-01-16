import { motion } from "framer-motion";

const AboutSection = () => {

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
                  Hey! I'm Nayeem — a developer who genuinely enjoys building stuff. Currently 
                  studying CS at{" "}
                  <span className="text-neutral-900 dark:text-neutral-200 font-medium">
                    KUET
                  </span>
                  , but most of my learning happens while shipping real projects.
                </p>
                <p>
                  I love the entire journey — from a rough idea to something people actually use. 
                  Whether it's a mobile app, a web platform, or figuring out how to deploy things 
                  properly, I enjoy the process of making it all work together.
                </p>
                <p>
                  When I'm not coding, you'll probably find me exploring new tech, tinkering with 
                  side projects, or diving into Machine Learning experiments. I believe the best 
                  way to learn is to build, break, and rebuild.
                </p>
              </div>
            </div>

            {/* Right column - Stats/Quick facts */}
            <div className="lg:w-2/5">
              <div className="sticky top-32">
                <div className="card p-8">
                  <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-6">
                    See this if U are in hurry
                  </h3>
                  <div className="space-y-6">
                    {[
                      { label: "Currently Into", value: "Building & Shipping" },
                      { label: "Favorite Stack", value: "Flutter, React, Next.js" },
                      { label: "Fun Fact", value: "ML Enthusiast" },
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
      </div>
    </div>
  );
};

export default AboutSection;
