import { ButtonOutline, ButtonPrimary } from "./Button";

import { TypeAnimation } from 'react-type-animation';




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
          <h3 className=" my-5 text-5xl leading-tight font-light lg:text-[55px] lg:leading-[1.15]"> I am Md <span className=" my-5 text-5xl leading-tight font-light lg:text-[55px] lg:leading-[1.15] text-[#00e7f8]">Rasel</span>  </h3>


            {/* <h2 className="text-3xl md:text-4xl ">Full-Stack Web Developer</h2> */}
           <h2>
            <span className="text-[2rem] text-extra-bold xl:text-[3rem]">a </span>
            <TypeAnimation
      sequence={[
      
        ' Full-stack Developer',
        1000, 
        ' Frontend Developer',
        1000,
        ' Website Designer',
        1000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
           </h2>
            
          <h2 className="text-2xl lg:text-3xl xl:text-4xl max-w-[15ch] sm:max-w-[20ch] lg:max-w-[25ch] mt-5 mb-8 lg:mb-10 font-thin">
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
