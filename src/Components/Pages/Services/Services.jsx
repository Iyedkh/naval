import React from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import Features from "../../../Features/Features";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen overflow-hidden font-poppins">
        {/* services component start */}
        <div className="sm:mt-36 mt-24">
          <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold sm:text-7xl text-5xl text-center">
            Our Services !
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
                {/* Service 1 */}
                <div
                  tabIndex={0}
                  aria-label="Naval Design and Engineering"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                    >
                      Naval Design and Engineering
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Offering comprehensive design and engineering solutions
                      for naval projects, including conceptual and detailed
                      designs, 3D modeling, and optimization.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div
                  tabIndex={0}
                  aria-label="Drafting of Technical Specifications"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Drafting of Technical Specifications
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      We prepare detailed specifications for dry dock and
                      modifications, ensuring compliance and alignment with
                      project goals.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div
                  tabIndex={0}
                  aria-label="Project Management"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Project Management
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      We handle the entire project lifecycle, including
                      coordination, scheduling, risk management, and quality
                      assurance to ensure success.
                    </p>
                  </div>
                </div>

                {/* Service 4 */}
                <div
                  tabIndex={0}
                  aria-label="Supervision of Works on Board and on Site"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Supervision of Works on Board and on Site
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Professional supervision services to ensure that work on
                      board and on-site is carried out to the highest standards
                      and specifications.
                    </p>
                  </div>
                </div>

                {/* Service 5 */}
                <div
                  tabIndex={0}
                  aria-label="Technical Services"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Technical Services
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      We offer a range of technical services including 3D scans,
                      remote inspections, surveys, and more, tailored to meet
                      your needs.
                    </p>
                  </div>
                </div>

                {/* Service 6 */}
                <div
                  tabIndex={0}
                  aria-label="Carpentry and Piping Activities"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Carpentry and Piping Activities
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Expertise in carpentry and piping with both traditional
                      and innovative materials, including plastics and
                      composites.
                    </p>
                  </div>
                </div>

                {/* Service 7 */}
                <div
                  tabIndex={0}
                  aria-label="Electrical Systems"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Electrical Systems
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Providing design, installation, and maintenance services
                      for marine electrical systems, ensuring reliability and
                      safety.
                    </p>
                  </div>
                </div>

                {/* Service 8 */}
                <div
                  tabIndex={0}
                  aria-label="Mechanics and Motors"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Mechanics and Motors
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Comprehensive services for marine engines and mechanical
                      systems, including diagnostics, repairs, and
                      optimizations.
                    </p>
                  </div>
                </div>

                {/* Service 9 */}
                <div
                  tabIndex={0}
                  aria-label="Hydraulic Systems"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Hydraulic Systems
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Design, installation, and maintenance of hydraulic
                      systems, tailored for the unique needs of marine
                      applications.
                    </p>
                  </div>
                </div>

                {/* Service 10 */}
                <div
                  tabIndex={0}
                  aria-label="Automation and Field Sensors"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Automation and Field Sensors
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Advanced automation and sensor systems for monitoring and
                      optimizing marine operations, enhancing efficiency and
                      safety.
                    </p>
                  </div>
                </div>

                {/* Service 11 */}
                <div
                  tabIndex={0}
                  aria-label="HVAC Systems"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      HVAC Systems
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Full service for HVAC systems, including design,
                      installation, and maintenance to ensure optimal climate
                      control.
                    </p>
                  </div>
                </div>

                {/* Service 12 */}
                <div
                  tabIndex={0}
                  aria-label="Surface Preparation and Painting"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Surface Preparation and Painting
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Surface preparation and painting services for marine
                      vessels, using state-of-the-art techniques and materials
                      to ensure longevity.
                    </p>
                  </div>
                </div>

                {/* Service 13 */}
                <div
                  tabIndex={0}
                  aria-label="Special Equipment"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Special Equipment
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Installation and maintenance of specialized marine
                      equipment tailored to your vessel's specific operational
                      needs.
                    </p>
                  </div>
                </div>
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
