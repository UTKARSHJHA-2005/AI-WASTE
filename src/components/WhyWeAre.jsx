"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Leaf, Sprout, Droplet } from "lucide-react";

const WhyWeAre = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Har baar scroll karne par animation ho
    threshold: 0.2, // 20% section visible hone par trigger hoga
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="bg-gray-100 min-h-screen flex flex-col justify-center py-16 px-4 md:px-12 text-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-4"
        initial="hidden"
        animate={controls}
        variants={fadeIn}
      >
        Why We Are
      </motion.h2>
      <motion.p
        className="text-gray-600 max-w-2xl mx-auto mb-12"
        initial="hidden"
        animate={controls}
        variants={fadeIn}
      >
        Turning food waste into clean energy and organic fertilizers, we create a sustainable
        future while reducing landfill pollution and carbon emissions.
      </motion.p>

      {/* Grid Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* Left Image */}
        <motion.div className="rounded-lg overflow-hidden" variants={fadeIn}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/495/803/small/world-earth-day-concept-3d-render-the-eco-friendly-design-save-the-earth-concept-april-22-concept-eco-earth-day-environment-concept-generate-ai-free-photo.jpg"
            alt="Water Conservation"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Middle Content - Promotes Soil Health */}
        <motion.div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center" variants={fadeIn}>
          <Sprout className="text-green-600 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold text-gray-900">Promotes Soil Health</h3>
          <p className="text-gray-600 text-sm">
            We create a sustainable future while reducing landfill pollution and carbon emissions.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div className="rounded-lg overflow-hidden" variants={fadeIn}>
          <img
            src="https://media.istockphoto.com/id/1062930150/photo/trees-between-office-buildings.jpg?s=612x612&w=0&k=20&c=CMYu0cFOzBRnkQgVay10hU3M6U-f26GAG9EJ-8aLNVU="
            alt="Green Infrastructure"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom Left - Saves Water & Resources */}
        <motion.div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center" variants={fadeIn}>
          <Droplet className="text-green-600 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold text-gray-900">Saves Water & Resources</h3>
          <p className="text-gray-600 text-sm">
            We create a sustainable future while reducing landfill pollution and carbon emissions.
          </p>
        </motion.div>

        {/* Bottom Middle Image */}
        <motion.div className="rounded-lg overflow-hidden" variants={fadeIn}>
          <img
            src="https://thumbs.dreamstime.com/b/world-environment-day-hand-child-planted-small-tree-green-color-grows-fertile-soil-forest-conservation-concept-147994084.jpg"
            alt="Soil Conservation"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom Right - Decrease Carbon */}
        <motion.div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center" variants={fadeIn}>
          <Leaf className="text-green-600 w-10 h-10 mb-3" />
          <h3 className="text-xl font-semibold text-gray-900">Decrease Carbon</h3>
          <p className="text-gray-600 text-sm">
            We create a sustainable future while reducing landfill pollution and carbon emissions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyWeAre;
