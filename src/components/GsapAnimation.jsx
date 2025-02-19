import { gsap } from "gsap";

import { useEffect, useState } from "react";
import SocialLinks from "./ui/SocialLinks";

export default function GsapAnimation() {
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    if (showPage) {
      const tl = gsap.timeline();

      tl.from("#gsap", {
        opacity: 0,
        duration: 1,
      });
      tl.to("#gsap", {
        opacity: 1,
        duration: 1.5,
      });
      tl.to(".gsap-animation", {
        opacity: 0,
        delay: 3,
        duration: 1,
        onComplete: () => {
          setShowPage(false); // Directly updating state
        },
      });

      return () => {
        tl.kill(); // Cleanup GSAP animations when component unmounts
      };
    }
  }, [showPage]);

  return (
    <>
      {showPage && (
        <div
          className="gsap-animation mx-auto z-50"
          onClick={() => setShowPage(false)}
        >
          <div
            className="flex flex-col items-center justify-center gap-3"
            id="gsap"
          >
            <h2 className="text-4xl font-bold text-white mb-4 cinzel-decorative-regular">
              WELCOME TO MY
            </h2>

            <h1 className="text-5xl font-bold text-[#00e7f8] mb-4">
              PORTFOLIO WEBSITE
            </h1>
          </div>
          <SocialLinks />
        </div>
      )}
    </>
  );
}
