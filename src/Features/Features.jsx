import React, { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import logo1 from "../../src/images/Features/f1.png";
import logo2 from "../../src/images/Features/f2.png";
import logo3 from "../../src/images/Features/f3.png";
import logo4 from "../../src/images/Features/f4.png";
import logo5 from "../../src/images/Features/f5.png";
import logo6 from "../../src/images/Features/f6.png";
import image1 from "../../src/images/1.jpg";
import image2 from "../../src/images/2.jpg";
import { useAnimation, useInView, motion } from "framer-motion";

const Features = () => {
  const { t } = useTranslation();
  const { innerWidth: width } = window;
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
      <div className="max-w-screen overflow-x-hidden font-poppins">
        {/* Features section */}
        {width < 631 ? (
          <>
            <section className="text-black">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">
                    {t('section_title')}
                  </h2>
                  <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
                    {t('section_description')}
                  </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {t('innovation_title')}
                    </h3>
                    <p className="mt-3 text-lg">
                      {t('innovation_description')}
                    </p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo1} alt={t('algorithms_title')} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            {t('algorithms_title')}
                          </h4>
                          <p className="mt-2">
                            {t('algorithms_description')}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo2} alt={t('technology_integration_title')} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            {t('technology_integration_title')}
                          </h4>
                          <p className="mt-2">
                            {t('technology_integration_description')}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo3} alt={t('personnel_support_title')} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            {t('personnel_support_title')}
                          </h4>
                          <p className="mt-2">
                            {t('personnel_support_description')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                      <img
                        src={image1}
                        alt={t('innovation_title')}
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {t('data_driven_title')}
                      </h3>
                      <p className="mt-3 text-lg">
                        {t('data_driven_description')}
                      </p>
                      <div className="mt-12 space-y-12">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo4} alt={t('analytics_title')} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              {t('analytics_title')}
                            </h4>
                            <p className="mt-2">
                              {t('analytics_description')}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo5} alt={t('customized_solutions_title')} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              {t('customized_solutions_title')}
                            </h4>
                            <p className="mt-2">
                              {t('customized_solutions_description')}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo6} alt={t('continuous_innovation_title')} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              {t('continuous_innovation_title')}
                            </h4>
                            <p className="mt-2">
                              {t('continuous_innovation_description')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                      <img
                        src={image2}
                        alt={t('data_driven_title')}
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="text-black">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl">
                    {t('section_title')}
                  </h2>
                  <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
                    {t('section_description')}
                  </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <motion.div
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, x: -75 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {t('innovation_title')}
                    </h3>
                    <p className="mt-3 text-lg">
                      {t('innovation_description')}
                    </p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo1} alt={t('algorithms_title')} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            {t('algorithms_title')}
                          </h4>
                          <p className="mt-2">
                            {t('algorithms_description')}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo2} alt={t('technology_integration_title')} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            {t('technology_integration_title')}
                          </h4>
                          <p className="mt-2">
                            {t('technology_integration_description')}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo3} alt={t('personnel_support_title')} />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            {t('personnel_support_title')}
                          </h4>
                          <p className="mt-2">
                            {t('personnel_support_description')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                      <img
                        src={image1}
                        alt={t('innovation_title')}
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <motion.div
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.25 }}
                    >
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {t('data_driven_title')}
                      </h3>
                      <p className="mt-3 text-lg">
                        {t('data_driven_description')}
                      </p>
                      <div className="mt-12 space-y-12">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo4} alt={t('analytics_title')} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              {t('analytics_title')}
                            </h4>
                            <p className="mt-2">
                              {t('analytics_description')}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo5} alt={t('customized_solutions_title')} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              {t('customized_solutions_title')}
                            </h4>
                            <p className="mt-2">
                              {t('customized_solutions_description')}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo6} alt={t('continuous_innovation_title')} />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              {t('continuous_innovation_title')}
                            </h4>
                            <p className="mt-2">
                              {t('continuous_innovation_description')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    <div className="mt-10 lg:mt-0">
                      <img
                        src={image2}
                        alt={t('data_driven_title')}
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Features;
