import React, { useEffect, useRef } from "react";
import logo1 from "../../src/images/Features/f1.png";
import logo2 from "../../src/images/Features/f2.png";
import logo3 from "../../src/images/Features/f3.png";
import logo4 from "../../src/images/Features/f4.png";
import logo5 from "../../src/images/Features/f5.png";
import logo6 from "../../src/images/Features/f6.png";
import image1 from "../../src/images/Features/fb11.png";
import image2 from "../../src/images/Features/fb22.png";
import { useAnimation, useInView, motion } from "framer-motion";

const Features = () => {
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
                    Naval Maintenance and Repair
                  </h2>
                  <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
                    Advanced Technology Solutions, Trained Personnel, and Data
                    Analysis to Optimize Your Naval Operations
                  </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      Innovation for the Marine Industry
                    </h3>
                    <p className="mt-3 text-lg">
                      Enhance your naval maintenance operations with advanced
                      technology solutions that optimize your processes,
                      integrate innovative technologies, and offer personalized
                      support.
                    </p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo1} alt="Advanced Algorithms" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            Advanced Algorithmic Solutions
                          </h4>
                          <p className="mt-2">
                            Our advanced algorithms optimize your maintenance
                            operations, improving efficiency and profitability. Make
                            informed decisions with actionable data.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo2} alt="Innovative Technology Integration" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            Innovative Technology Integration
                          </h4>
                          <p className="mt-2">
                            Integrate cutting-edge technologies like AI and IoT.
                            Automate tasks, enhance communication, and unlock your
                            growth potential.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo3} alt="Trained Personnel Support" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            Trained Personnel Support
                          </h4>
                          <p className="mt-2">
                            Our trained experts ensure smooth implementation and
                            ongoing support. Utilize our software effectively with
                            personalized assistance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                      <img
                        src={image1}
                        alt="Advanced Technology for Naval Maintenance"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Data-Driven Decisions, Customized Solutions
                      </h3>
                      <p className="mt-3 text-lg">
                        Make informed decisions with our powerful data analytics.
                        Our customized solutions cater to your specific naval
                        maintenance needs.
                      </p>
                      <div className="mt-12 space-y-12">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo4} alt="Powerful Analytics Capabilities" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              Powerful Analytics Capabilities
                            </h4>
                            <p className="mt-2">
                              Gain valuable insights from your data with comprehensive
                              visualizations. Monitor KPIs, track trends, and identify
                              areas for improvement.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo5} alt="Customized Solutions" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              Customized Solutions
                            </h4>
                            <p className="mt-2">
                              Tailored software solutions to meet your specific needs.
                              Achieve sustainable growth by aligning your naval
                              operations with your business goals.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo6} alt="Continuous Innovation and Updates" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              Continuous Innovation and Updates
                            </h4>
                            <p className="mt-2">
                              Stay ahead with the latest features and enhancements.
                              Adapt to market dynamics with ongoing innovation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                      <img
                        src={image2}
                        alt="Innovation in Naval Maintenance"
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
                    Naval Maintenance and Repair
                  </h2>
                  <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
                    Advanced Technology Solutions, Trained Personnel, and Data
                    Analysis to Optimize Your Naval Operations
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
                      Innovation for the Marine Industry
                    </h3>
                    <p className="mt-3 text-lg">
                      Enhance your naval maintenance operations with advanced
                      technology solutions that optimize your processes,
                      integrate innovative technologies, and offer personalized
                      support.
                    </p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo1} alt="Advanced Algorithms" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            Advanced Algorithmic Solutions
                          </h4>
                          <p className="mt-2">
                            Our advanced algorithms optimize your maintenance
                            operations, improving efficiency and profitability. Make
                            informed decisions with actionable data.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo2} alt="Innovative Technology Integration" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            Innovative Technology Integration
                          </h4>
                          <p className="mt-2">
                            Integrate cutting-edge technologies like AI and IoT.
                            Automate tasks, enhance communication, and unlock your
                            growth potential.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo3} alt="Trained Personnel Support" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6">
                            Trained Personnel Support
                          </h4>
                          <p className="mt-2">
                            Our trained experts ensure smooth implementation and
                            ongoing support. Utilize our software effectively with
                            personalized assistance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-center p-3"
                    ref={ref}
                    variants={{
                      hidden: { opacity: 0, x: 75 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <img
                      src={image1}
                      alt="Advanced Technology for Naval Maintenance"
                      className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                    />
                  </motion.div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <motion.div
                      className="lg:col-start-1 lg:row-start-1"
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.75 }}
                    >
                      <img
                        src={image2}
                        alt="Innovation in Naval Maintenance"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </motion.div>
                    <motion.div
                      className="lg:col-start-2"
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Data-Driven Decisions, Customized Solutions
                      </h3>
                      <p className="mt-3 text-lg">
                        Make informed decisions with our powerful data analytics.
                        Our customized solutions cater to your specific naval
                        maintenance needs.
                      </p>
                      <div className="mt-12 space-y-12">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo4} alt="Powerful Analytics Capabilities" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              Powerful Analytics Capabilities
                            </h4>
                            <p className="mt-2">
                              Gain valuable insights from your data with comprehensive
                              visualizations. Monitor KPIs, track trends, and identify
                              areas for improvement.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo5} alt="Customized Solutions" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              Customized Solutions
                            </h4>
                            <p className="mt-2">
                              Tailored software solutions to meet your specific needs.
                              Achieve sustainable growth by aligning your naval
                              operations with your business goals.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                              <img src={logo6} alt="Continuous Innovation and Updates" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6">
                              Continuous Innovation and Updates
                            </h4>
                            <p className="mt-2">
                              Stay ahead with the latest features and enhancements.
                              Adapt to market dynamics with ongoing innovation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </>
  );
};

export default Features;
