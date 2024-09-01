import React, { useEffect, useRef } from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import TeamImage from "../../../images/4-1024x684.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <Navbar />
      <div className="max-w-screen overflow-hidden font-poppins">
        <div className="sm:h-screen h-[80rem] -mb-20 sm:mb-0 bg-gradient-to-b from-gray-100/10 to-gray-200/50 pt-20">
          <div className="mt-20">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center text-center"
            >
              <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold text-[3rem]">
                {t('whoWeAreTitle')}
              </h1>
            </motion.div>

            {/* Main content container */}
            <div className="sm:flex sm:justify-between items-center gap-10 sm:mx-20 mx-4 mt-10">
              {/* Image Container */}
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:w-1/2 w-full mb-10 sm:mb-0"
              >
                <img
                  alt="About Us"
                  src={TeamImage}
                  className="rounded-2xl shadow-lg transition duration-300 ease-in-out hover:drop-shadow-xl mx-auto"
                />
              </motion.div>

              {/* Text Container */}
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:w-1/2 w-full text-center sm:text-left"
              >
                <h3 className="text-lg text-blue-500 leading-relaxed">
                  {t('aboutUsText')}
                </h3>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Where You Can Find Us Section */}
        <div className="container mx-auto py-16">
          <h1 className="text-center font-extrabold sm:text-4xl mt-6 text-2xl mb-10">
            {t('findUsTitle')}
          </h1>
          <div className="flex justify-center mb-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4820.846802531921!2d10.177243885501527!3d36.8953658497628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb1ae6ef65d3%3A0x47949104f322561f!2sR%C3%A9sidence%20Babel%2C%20Cit%C3%A9%20Ghazala!5e1!3m2!1sen!2stn!4v1724955986551!5m2!1sen!2stn"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full max-w-3xl h-96 border-none"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
