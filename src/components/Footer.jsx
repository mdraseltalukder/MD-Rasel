import { ButtonPrimary } from "@/components/Button";
import { TextSplitter } from "@/components/ui/TextSplitter";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mdraseltalukder",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-rasel-talukderbd/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/mdraseltalukdr",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mdraseltalukdrr/",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div
        className="container"
        // data-aos="fade-up"
        // data-aos-offset="50"
        // data-aos-easing="ease-in-sine"
      >
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]  section-heading">
              <TextSplitter text="Let's work together today!" />
            </h2>

            <ButtonPrimary
              href="mailto:mdrasel551219@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes=""
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 font-bold text-[18px]  text-[#00e7f8]">
                Sitemap
              </p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-[#00e7f8] "
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-[18px]  font-bold  text-[#00e7f8]">
                Socials
              </p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-[#00e7f8] "
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="#home" className="logo ">
            <img
              src="/images/logo.png"
              width={200}
              height={120}
              alt="md rasel logo"
            />
          </a>

          <p className="text-zinc-300 text-sm ">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#00e7f8]">MD Rasel</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
