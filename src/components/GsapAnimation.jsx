import { gsap } from "gsap";
import { useEffect } from 'react';
import SocialLinks from "./ui/SocialLinks";
export default function GsapAnimation() {

useEffect(()=>{
    const tl= gsap.timeline();
tl.from("#gsap",{
    opacity:0,
    duration:1,
})
tl.to("#gsap",{
    opacity:1,

    duration:1,
})
tl.to(".gsap-animation",{
    opacity:0,
    delay:2,
    duration:1,
})



},[])


  return (
   <>
     <div className="gsap-animation mx-auto " >
           <div className="flex flex-col items-center justify-center gap-3" id="gsap">
           <h2 className="text-4xl font-bold text-white mb-4 cinzel-decorative-regular">WELCOME TO MY</h2>
            <h1 className="text-5xl font-bold text-[#00e7f8] mb-4 ">PORTFOLIO WEBSITE</h1>
            <SocialLinks />
           </div>
        </div>
   </>
  )
}
