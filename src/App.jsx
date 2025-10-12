import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

/**
 * Components
 */
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import Work from "@/components/Work";
// import Review from "@/components/Review";
import ChatWidget from "@/components/ChatMassage";
import Contact from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import Footer from "@/components/Footer";
import Tools from "./components/Tools";
// import GsapAnimation from "./components/GsapAnimation";

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);
const App = () => {
  // const [showPage, setShowPage] = useState(true);

  // useEffect(() => {
  //   if (showPage) {
  //     const tl = gsap.timeline();

  // tl.fromTo(
  //   "#gsap",
  //   {
  //     opacity: 0,
  //     duration: 1,
  //   },
  //   {
  //     opacity: 1,
  //     duration: 1,
  //   }
  // );
  // tl.fromTo(
  //   "#socials",
  //   {
  //     opacity: 0,
  //     y: 50,
  //   },
  //   {
  //     opacity: 1,
  //     y: 0,
  //     stagger: 0.2,
  //   },
  //   "-=1"
  // );

  //     tl.to(".gsap-animation", {
  //       opacity: 0,
  //       delay: 4,
  //       duration: 1,
  //       onComplete: () => {
  //         setShowPage(false);
  //       },
  //     });

  //     return () => {
  //       tl.kill(); // Cleanup GSAP animations when component unmounts
  //     };
  //   }
  // }, [showPage]);

  useGSAP(() => {
    // if (!showPage) {
    const htl = gsap.timeline();

    htl.fromTo(
      "#hero1",
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: "power2.out",
      }
    );

    htl.fromTo(
      "#hero2",
      {
        opacity: 1,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=1"
    );

    htl.from("#socials", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power2.out",
    });

    // }

    // all section animation

    document.querySelectorAll(".section-heading").forEach((heading) => {
      gsap.from(heading.querySelectorAll(".split-char"), {
        scrollTrigger: {
          trigger: heading,
          start: "top bottom",
          end: "bottom 80%",
          scrub: 1.5,
        },
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      });

      const subheading = heading.parentElement.querySelector(".subheading");

      if (subheading) {
        gsap.from(subheading, {
          scrollTrigger: {
            trigger: subheading,
            start: "top bottom",
            end: "bottom 80%",
            scrub: 1.5,
          },
          y: 40,
          opacity: 0,
        });
      }
    });

    // Cleanup properly
    return () => {
      htl.kill();
      // scrollTl.kill();
    };
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <ChatWidget />
        <About />
        <Skill />
        <Tools />
        <Work />
        <ExperienceSection />
        {/* <Review /> */}
        <Contact />
        {/* <GsapAnimation showPage={showPage} setShowPage={setShowPage} /> */}
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
