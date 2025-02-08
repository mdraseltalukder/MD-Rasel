
import { ButtonPrimary } from "./Button";

import { TypeAnimation } from 'react-type-animation';
import GsapAnimation from './GsapAnimation';
import ShinyText from './ui/ShinyText.jsx';
import SocialLinks from "./ui/SocialLinks";


export default function Hero(){



  return (
    <>
    <section id="home" className="pt-28 lg:pt-36 ">
    
   
      <div className="container  items-center lg:grid lg:grid-cols-2 lg:gap-10 ">
        <div id="hero1">
        
          <h3 className=" my-5 text-5xl leading-tight font-light lg:text-[55px] lg:leading-[1.15]"> I am{" "} 
          
           {/* <span className=" my-5 text-5xl leading-tight font-light lg:text-[55px] lg:leading-[1.15] text-[#00e7f8]">Md Rasel</span> */}
         
  
  <ShinyText text="Md Rasel" disabled={false} speed={3} className='custom-class cinzel-decorative-regular' />


           </h3>


          





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
            
          <h2 className="text-2xl lg:text-3xl xl:text-4xl max-w-[15ch] sm:max-w-[20ch] lg:max-w-[25ch] mt-5 mb-8 lg:mb-10 font-thin  ">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="text-2xl lg:text-3xl xl:text-4xl max-w-[15ch] sm:max-w-[20ch] lg:max-w-[25ch] mt-5 mb-8 lg:mb-10 font-th
          ">

</div>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />
<SocialLinks/>
            {/* <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            /> */}
          </div>
        </div>

        <div className="hidden lg:block" id="hero2">
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
    <div>
    <GsapAnimation />
    </div>
    </>
  );
};

