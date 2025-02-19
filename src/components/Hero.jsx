import { ButtonPrimary } from "./Button";

import { TypeAnimation } from "react-type-animation";
import ShinyText from "./ui/ShinyText.jsx";
import SocialLinks from "./ui/SocialLinks";

export default function Hero() {
  return (
    <>
      <section id="home" className="pt-28 lg:pt-36 ">
        <div className="container  items-center lg:grid lg:grid-cols-2 lg:gap-10 ">
          <div
            id="hero1"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            <h3 className=" my-5 text-5xl leading-tight font-light lg:text-[55px] lg:leading-[1.15]">
              {" "}
              I am{" "}
              <ShinyText
                text="Md Rasel"
                disabled={false}
                speed={3}
                className="custom-class cinzel-decorative-regular"
              />
            </h3>

            <h2>
              <span className="text-[2rem] text-extra-bold xl:text-[3rem]">
                a{" "}
              </span>
              <TypeAnimation
                sequence={[
                  " Full-stack Developer",
                  1000,
                  " Frontend Developer",
                  1000,
                  " Website Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h2>

            <h2 className="text-2xl lg:text-3xl xl:text-4xl max-w-[15ch] sm:max-w-[20ch] lg:max-w-[25ch] mt-5 mb-8 lg:mb-10 font-thin  ">
              Building Scalable Modern Websites for the Future
            </h2>
            <div className="flex flex-col gap-7">
              <SocialLinks />

              <div className="flex items-center gap-3">
                <ButtonPrimary label="Download CV" icon="download" />

                {/* <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            /> */}
              </div>
            </div>
          </div>

          <div className="hidden lg:block" id="hero2">
            <figure className="w-full max-w-[600px]  ml-auto  overflow-hidden">
              <div
                className=" w-full z-20"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
              >
                <img
                  src="/images/profile.jpg"
                  width={600}
                  height={500}
                  alt="Rasel"
                  className="w-full BannerImg "
                />
              </div>

              {/* <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
     className="absolute w-[500px] h-[500px] top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
  >
    <path
      fill="#00E7F8"
      d="M34.9,-52.5C47.6,-46.1,61.8,-40.4,65.4,-30.5C69,-20.6,61.8,-6.3,59.1,8.1C56.3,22.5,58,37.1,53.4,51.3C48.9,65.4,38.1,79.2,25.2,80.5C12.4,81.8,-2.6,70.7,-19.1,65.6C-35.7,60.6,-53.9,61.5,-64.6,53.6C-75.3,45.6,-78.4,28.7,-80.7,11.7C-82.9,-5.2,-84.2,-22.2,-79.4,-37.7C-74.6,-53.3,-63.6,-67.6,-49.3,-73.2C-35,-78.9,-17.5,-76.1,-3.2,-71.1C11.1,-66.1,22.2,-58.9,34.9,-52.5Z"
      transform="translate(100 100)"
    />
  </svg> */}
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
