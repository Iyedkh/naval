import React from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import { useTranslation } from "react-i18next";
import Image from "../../../images/4-1024x684.jpeg";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="max-w-screen font-poppins overflow-hidden">
        <section className="relative z-10 bg-gradient-to-br from-blue-100 py-20 sm:px-20 sm:py-40">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap lg:justify-between">
              {/* Left Section */}
              <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                <div className="mb-12 max-w-[570px] lg:mb-0 pl-4">
                  <span className="text-blue-600 mb-4 block text-base font-semibold">
                    {t("contact.contactUs")}
                  </span>
                  <h2 className="text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                    {t("contact.title")}
                  </h2>
                  <p className="text-gray-700 mb-9 text-base leading-relaxed">
                    {t("contact.description")}
                  </p>
                  {/* Location */}
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="bg-blue-400/20 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current text-blue-600"
                      >
                        <path d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z" />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="text-dark mb-1 text-xl font-bold">
                        {t("contact.ourLocation")}
                      </h4>
                      <p className="text-body-color text-base">
                        {t("contact.address")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section: Form */}
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t("contact.sendMessage")}
                  </h3>
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("contact.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder={t("contact.namePlaceholder")}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder={t("contact.emailPlaceholder")}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("contact.message")}
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder={t("contact.messagePlaceholder")}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                      {t("contact.send")}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
