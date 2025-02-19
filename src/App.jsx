import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";
// import Review from "./components/Review";
import Contact from "./components/Contact";
import ExperienceSection from "./components/Experience";
import Footer from "./components/Footer";
import GsapAnimation from "./components/GsapAnimation";

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <ExperienceSection />
        {/* <Review /> */}
        <Contact />
        <GsapAnimation />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;

// // useGSAP(() => {
// //     const elements = gsap.utils.toArray(".");

// //     elements.forEach((element) => {
// //       gsap.to(element, {
// //         scrollTrigger: {
// //           trigger: element,
// //           start: "-100 bottom",
// //           end: "bottom 80%",
// //           scrub: true,
// //           scale:0,
// //         },
// //         y: 0,
// //         opacity: 1,
// //         duration: 1,
// //         ease: "power2.out",
// //       });
// //     });
// //   });
