import React, { useEffect, useRef } from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import TeamImage from '../../../images/Team/team1.png'
import TeamMember1 from "../../../images/Team/teamMember1.jpeg";
import {VscGithubAlt} from 'react-icons/vsc'
import {TfiTwitter} from 'react-icons/tfi'
import {RxInstagramLogo} from 'react-icons/rx'

const About = () => {
    const { innerWidth: Width } = window;
    const ref = useRef();
    const isInView = useInView(ref);
    const mainControlls = useAnimation();
    useEffect(() => {
      if (isInView) {
        mainControlls.start("visible");
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
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center text-center"
            >
              <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold text-[3rem]">
                Who are wee and whay are wee so good ?
              </h1>
            </motion.div>
            <div className="sm:flex sm:justify-between sm:mr-[10%] sm:mt-20 mt-10 ml-10">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:w-[50%] w-[90%] mb-10 sm:mb-0"
              >
                <img
                  alt="imageAbout"
                  src={TeamImage}
                  className="rounded-2xl sm:toas:translate-x-[200px] sm:taos:opacity-0 sm:hover:-translate-y-2 sm:transition sm:ease-in-out duration-300 sm:hover:drop-shadow-xl sm:z-20 sm:mx-auto shadow-lg "
                />
              </motion.div>
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:flex sm:justify-center text-center sm:mt-20"
              >
                <h1 className="text-xl sm:text-4xl sm:font-extrabold font-bold text-blue-500 ml-[-10%] sm:ml-0 mb-10 sm:mb-0">
                  "Wee are Inspired by Results and driven by Data"
                </h1>
              </motion.div>
            </div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="block h-screen sm:justify-start justify-center text-center sm:text-start sm:ml-20 ml-0"
            >
              <p className="sm:flex justify-center text-3xl hidden ml-[-80%] mb-[-10%] sm:my-24">
                About Us:
              </p>
              <p className="hidden sm:flex border-y-2 py-4 border-y-indigo-900/30 font-semibold sm:ml-[7%] w-[70%] ">
                Welcome to our site, where we specialize in empowering
                businesses to unlock their true potential and achieve
                unparalleled growth. With our expertise in advanced technology
                solutions, we provide the tools and knowledge necessary for
                organizations to make data-driven decisions, optimize
                operations, and drive innovation. Our personalized approach
                ensures that each business receives tailored solutions designed
                to address their specific objectives and challenges. By
                leveraging the latest advancements and continuous innovation, we
                pave the way for businesses to thrive in today's ever-evolving
                landscape. At our site, we believe that success lies in
                harnessing the power of technology and data to drive meaningful
                outcomes. Whether you're a small startup or a large enterprise,
                our comprehensive range of services and solutions is designed to
                meet your unique needs. From advanced algorithms and powerful
                analytics capabilities to seamless technology integration and
                ongoing support from our trained personnel, we are dedicated to
                helping businesses grow and succeed. Join us on this
                transformative journey, and together, we will propel your
                business to new heights of success.
              </p>
              <p className="mt-16 text-lg font-semibold sm:hidden block mb-10">
                About Us:
              </p>
              <p className="flex sm:hidden mt-4 mx-6">
                From advanced algorithms and powerful analytics capabilities to
                seamless technology integration and ongoing support from our
                trained personnel, we are dedicated to helping businesses grow
                and succeed. Join us on this transformative journey, and
                together, we will propel your business to new heights of
                success.
              </p>
            </motion.div>
          </div>
        </div>
        {/* teams section */}
        <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
        <div>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                OUR TEAM
              </p>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes that make it all Work!
              </h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src={TeamMember1}
                          alt="#"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Max Thompson
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Marketing Manager
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The CEO's role in raising a company's corporate IQ is to
                        establish an atmosphere that promotes knowledge sharing
                        and collaboration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                          alt="#"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Silene Tokyo
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Product Design Head
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The emphasis on innovation and technology in our
                        companies has resulted in a few of them establishing
                        global benchmarks in product design and development.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                          alt="#"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Johnson Stone
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Manager Development
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Our services encompass the assessment and repair of
                        property damage caused by water, fire, smoke, or mold.
                        We can also be a part of the restoration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                          alt="alt"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Dean Jones
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Principal Software Engineer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        An avid open-source developer who loves to be creative
                        and inventive. I have 20 years of experience in the
                        field.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                          alt="alt"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Rachel Adams
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Product Design Head
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Product designer with interests in immersive computing
                        and XR, political ventures, and emerging technologies.
                        Able to take ideas and give them a life.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
                          alt="alt"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Charles Keith
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        UX Designer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        A UX designer is the voice of the customer. Our job is
                        to look beyond the business goals. We don't just
                        experience user interface but also questions it.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <VscGithubAlt
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <TfiTwitter
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <RxInstagramLogo
                              size={25}
                              className="text-gray-500 hover:text-purple-500"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* teams section end */}
        <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
        <div className="h-[40rem] sm:mt-20 mt-[20%] mb-20">
          <h1 className="flex justify-center font-extrabold text-center sm:text-4xl text-2xl">
            Where you can find us
          </h1>
          <div className="flex justify-center mt-20" id="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.39567994609!2d-80.3118583441288!3d25.782538870990084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sen!2sch!4v1686508959774!5m2!1sen!2sch"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-screen sm:mx-36 mx-10 h-[30rem]"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
