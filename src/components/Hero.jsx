import { ButtonOutline, ButtonPrimary } from "./Button";




const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36 ">
    
   
      <div className="container  items-center lg:grid lg:grid-cols-2 lg:gap-10 ">
        <div>
          {/* <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="aiman portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div> */}
          <h3 className="text-2xl md:text-3xl font-extralight">I am Md Rasel</h3>


            <h2 className="headline-1 mt-5 mb-8 lg:mb-10">Full-Stack Web Developer</h2>
            {/* <Typed
              strings={[
                "Full-Stack Web Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            /> */}
            
          <h2 className="text-3xl lg:text-4xl max-w-[15ch] sm:max-w-[20ch] lg:max-w-[25ch] mt-5 mb-8 lg:mb-10 font-thin">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-t rounded-[60px] overflow-hidden">
            <img
              src="/images/profile.jpeg"
              width={500}
              height={600}
              alt="Rasel"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
