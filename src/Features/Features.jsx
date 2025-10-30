import React, { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { useAnimation, useInView, motion } from "framer-motion";
import logo1 from "../../src/images/Features/f1.png";
import logo2 from "../../src/images/Features/f2.png";
import logo3 from "../../src/images/Features/f3.png";
import logo4 from "../../src/images/Features/f4.png";
import logo5 from "../../src/images/Features/f5.png";
import logo6 from "../../src/images/Features/f6.png";
import image1 from "../../src/images/1.jpg";
import image2 from "../../src/images/2.jpg";

const Features = () => {
  const { t } = useTranslation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (isInView1) controls1.start("visible");
    if (isInView2) controls2.start("visible");
  }, [isInView1, isInView2]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      section: "innovation",
      image: image1,
      items: [
        { logo: logo1, title: "algorithms_title", description: "algorithms_description" },
        { logo: logo2, title: "technology_integration_title", description: "technology_integration_description" },
        { logo: logo3, title: "personnel_support_title", description: "personnel_support_description" }
      ]
    },
    {
      section: "data_driven",
      image: image2,
      items: [
        { logo: logo4, title: "analytics_title", description: "analytics_description" },
        { logo: logo5, title: "customized_solutions_title", description: "customized_solutions_description" },
        { logo: logo6, title: "continuous_innovation_title", description: "continuous_innovation_description" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Section Header */}
      <div className="text-center px-4 py-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {t('section_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t('section_description')}
          </p>
        </motion.div>
      </div>

      {/* Features Sections */}
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        const ref = index === 0 ? ref1 : ref2;
        const controls = index === 0 ? controls1 : controls2;

        return (
          <section key={feature.section} className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}>
                {/* Content */}
                <motion.div
                  ref={ref}
                  className="flex-1"
                  variants={containerVariants}
                  initial="hidden"
                  animate={controls}
                >
                  <motion.h3 
                    className="text-3xl md:text-4xl font-light text-gray-900 mb-6"
                    variants={itemVariants}
                  >
                    {t(`${feature.section}_title`)}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-gray-600 mb-12 leading-relaxed"
                    variants={itemVariants}
                  >
                    {t(`${feature.section}_description`)}
                  </motion.p>

                  <motion.div 
                    className="space-y-8"
                    variants={containerVariants}
                  >
                    {feature.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.title}
                        className="flex gap-6 group hover:bg-gray-50 p-4 rounded-2xl transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                            <img 
                              src={item.logo} 
                              alt={t(item.title)}
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {t(item.title)}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {t(item.description)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div 
                  className="flex-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    variants={imageVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={feature.image}
                      alt={t(`${feature.section}_title`)}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Features;