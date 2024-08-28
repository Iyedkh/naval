import React, { useEffect, useRef } from "react";
import Card from "./Card";
import image1 from "../../images/Price/1.png";
import image2 from "../../images/Price/2.png";
import image3 from "../../images/Price/3.png";
import { useAnimation, useInView, motion } from "framer-motion";

const CardComponent = () => {
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
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <div className="w-full py-[10rem] px-4 bg-white -mt-28">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-center sm:text-5xl mt-[6%] text-black">
            Some of our Packages{" "}
          </h2>
        </div>
        <p className="flex text-xl justify-center sm:mb-24 mb-16 text-center mt-6 sm:mt-0 ">
          Find your Package that fits your needs, weather your a new company or
          a Enterprise wee got you covered!
        </p>
        {/* cards */}
        <>
          {Width < 631 ? (
            <>
              <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
                <div>
                  <Card
                    image={image1}
                    Package={"Growth Package"}
                    Price={"$350"}
                    Feature1={"Advanced Algorithmic Solutions"}
                    Feature2={"Trained Personnel Support"}
                    Feature3={"Innovative Technology Integration"}
                    Feature4={"Powerful Analytics Capabilities"}
                    Feature5={"Personalized Solutions"}
                    Feature6={"Continuous Innovation"}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-300"}
                    iconColor5={"text-green-300"}
                    iconColor6={"text-green-300"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </div>
                <div>
                  <Card
                    image={image2}
                    Package={"Standard Package"}
                    Price={"$1200"}
                    Feature1={"Advanced Algorithmic Solutions"}
                    Feature2={"Trained Personnel Support"}
                    Feature3={"Innovative Technology Integration"}
                    Feature4={"Powerful Analytics Capabilities"}
                    Feature5={"Personalized Solutions"}
                    Feature6={"Continuous Innovation"}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-500"}
                    iconColor5={"text-green-300"}
                    iconColor6={"text-green-300"}
                    buttonBg={"bg-green-400"}
                    hoverBgButton={"hover:bg-green-500"}
                    buttonTextColor={"text-white"}
                    standOutBg={"bg-blue-100/30"}
                    marginMiddle={"md:my-6"}
                  />
                </div>
                <div>
                  <Card
                    image={image3}
                    Package={"Enterprise Package"}
                    Price={"$7500"}
                    Feature1={"Advanced Algorithmic Solutions"}
                    Feature2={"Trained Personnel Support"}
                    Feature3={"Innovative Technology Integration"}
                    Feature4={"Powerful Analytics Capabilities"}
                    Feature5={"Personalized Solutions"}
                    Feature6={"Continuous Innovation"}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-500"}
                    iconColor5={"text-green-500"}
                    iconColor6={"text-green-500"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Card
                    image={image1}
                    Package={"Growth Package"}
                    Price={"$350"}
                    Feature1={"Advanced Algorithmic Solutions"}
                    Feature2={"Trained Personnel Support"}
                    Feature3={"Innovative Technology Integration"}
                    Feature4={"Powerful Analytics Capabilities"}
                    Feature5={"Personalized Solutions"}
                    Feature6={"Continuous Innovation"}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-300"}
                    iconColor5={"text-green-300"}
                    iconColor6={"text-green-300"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  <Card
                    image={image2}
                    Package={"Standard Package"}
                    Price={"$1200"}
                    Feature1={"Advanced Algorithmic Solutions"}
                    Feature2={"Trained Personnel Support"}
                    Feature3={"Innovative Technology Integration"}
                    Feature4={"Powerful Analytics Capabilities"}
                    Feature5={"Personalized Solutions"}
                    Feature6={"Continuous Innovation"}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-500"}
                    iconColor5={"text-green-300"}
                    iconColor6={"text-green-300"}
                    buttonBg={"bg-green-400"}
                    hoverBgButton={"hover:bg-green-500"}
                    buttonTextColor={"text-white"}
                    standOutBg={"bg-blue-100/30"}
                    marginMiddle={"md:my-6"}
                  />
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Card
                    image={image3}
                    Package={"Enterprise Package"}
                    Price={"$7500"}
                    Feature1={"Advanced Algorithmic Solutions"}
                    Feature2={"Trained Personnel Support"}
                    Feature3={"Innovative Technology Integration"}
                    Feature4={"Powerful Analytics Capabilities"}
                    Feature5={"Personalized Solutions"}
                    Feature6={"Continuous Innovation"}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-500"}
                    iconColor5={"text-green-500"}
                    iconColor6={"text-green-500"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </motion.div>
              </div>
            </>
          )}
        </>

        {/* cards end */}
      </div>
      
    </div>
  );
};

export default CardComponent;
