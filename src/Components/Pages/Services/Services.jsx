import React from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import Features from "../../../Features/Features";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="max-w-screen overflow-hidden font-poppins">
        {/* services component start */}
        <div className="sm:mt-36 mt-24">
          <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold sm:text-7xl text-5xl text-center">
            {t('services.title')}
          </h1>
        </div>
        <div className="pb-16">
          {/* Code block starts */}
          <section className="max-w-8xl mx-auto container bg-white pt-16">
            <div className="">
              <div
                tabIndex={0}
                aria-label="group of cards"
                className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
              >
                {t('services.servicesList', { returnObjects: true }).map((service, index) => (
                  <div
                    key={index}
                    tabIndex={0}
                    aria-label={service.name}
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                      >
                        {service.name}
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Code block ends */}
        </div>
        {/* services component end */}
      </div>
      <Features />
      <Footer />
    </>
  );
};

export default Services;
