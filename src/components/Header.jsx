import { useState } from "react";

import Navbar from "@/components/Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto flex px-4 md:px-0 justify-between items-center lg:px-6 gap-2 lg:gap-4">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.webp"
              width={200}
              height={100}
              alt="Md Rasel"
            />
          </a>
        </h1>

        <div className="relative md:mx-auto">
          <button
            className="menu-btn block md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <div className="contact-btn hidden md:block ">
          <a href="#contact" className="text-[12px] lg:text-[16px]">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Contact&nbsp;Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
