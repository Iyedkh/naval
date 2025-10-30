import React, { useEffect, useRef } from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import TeamImage from "../../../images/4-1024x684.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.3 });
  const mainControls = useAnimation();
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    if (isInView1) mainControls.start("visible");
    if (isInView2) imageControls.start("visible");
    if (isInView3) textControls.start("visible");
  }, [isInView1, isInView2, isInView3]);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref1}
            variants={containerVariants}
            initial="hidden"
            animate={mainControls}
            className="text-center mb-16"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight"
            >
              {t('whoWeAreTitle')}
            </motion.h1>
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8"
            ></motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              ref={ref2}
              variants={{
                hidden: { opacity: 0, x: -50, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
              initial="hidden"
              animate={imageControls}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="Our Team"
                  src={TeamImage}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-emerald-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              ref={ref3}
              variants={containerVariants}
              initial="hidden"
              animate={textControls}
              className="space-y-6"
            >
              <motion.div
                variants={itemVariants}
                className="prose prose-lg max-w-none"
              >
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('aboutUsText')}
                </p>
              </motion.div>
              
              {/* Additional Info Sections */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 pt-6"
              >
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="pt-6">
                <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-medium hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                  Learn More About Our Services
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              {t('findUsTitle')}
            </h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our headquarters or get in touch with our team
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4820.846802531921!2d10.177243885501527!3d36.8953658497628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb1ae6ef65d3%3A0x47949104f322561f!2sR%C3%A9sidence%20Babel%2C%20Cit%C3%A9%20Ghazala!5e1!3m2!1sen!2stn!4v1724955986551!5m2!1sen!2stn"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 border-none"
            ></iframe>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center space-x-2 text-gray-600 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-sm">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Résidence Babel, Cité Ghazala, Tunisia</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;