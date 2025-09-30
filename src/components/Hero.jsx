import { MdDownload } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import ShinyText from "./ui/ShinyText.jsx";
import SocialLinks from "./ui/SocialLinks";

export default function Hero() {
  return (
    <>
      <section id="home" className="py-28 lg:py-36 ">
        <div className="container  items-center lg:grid lg:grid-cols-2 lg:gap-10 ">
          <div
            className="opacity-0"
            id="hero1"
            // data-aos="fade-right"
            // data-aos-offset="50"
            // data-aos-easing="ease-in-sine"
            // data-aos-duration="1000"
          >
            <h3 className=" my-5 text-5xl leading-tight font-light lg:text-[55px] lg:leading-[1.15] ">
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
                <a
                  href="https://drive.google.com/file/d/1m8dq3BJUVl1JLV2LhBoa7mFUGWpxqE25/view?usp=sharing"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Download CV
                  <MdDownload className="size-5" />
                </a>

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
              <div className=" w-full z-20">
                <img
                  src="/images/profile.jpg"
                  width={600}
                  height={500}
                  alt="Rasel"
                  className="w-full BannerImg "
                />
                <div></div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
