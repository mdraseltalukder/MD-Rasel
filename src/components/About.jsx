import SpotlightCard from "./ui/SpotlightCard";

const aboutItems = [
  {
    label: "Project done",
    number: 20,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

export default function About() {
  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <section
        id="about"
        className="section "
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="container">
          <div className="bg-transparent pb-6 rounded-2xl md:pb-12 md:grid md:grid-cols-[1fr_2fr] md:items-center md:gap-6">
            <div className="hidden md:block w-full">
              <img
                src="images/profile.jpg"
                alt=""
                className="w-full rounded-lg shadow-lg shadow-[#00e7f8]"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 experience">
                About Us
              </h2>
              <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Welcome! I&apos;m Md Rasel, a professional web developer with a
                knack for crafting visually stunning and highly functional
                websites. Combining creativity and technical expertise. I
                transform your vision into digital masterpiece that excels in
                both appearance and performance.
              </p>

              <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {aboutItems.map(({ label, number }, key) => (
                  <div key={key}>
                    <div className="flex items-center md:mb-2">
                      <span className="text-2xl font-semibold md:text-4xl text-[#00e7f8]">
                        {number}
                      </span>
                      <span className="text-[#00e7f8] font-semibold md:text-3xl">
                        +
                      </span>
                    </div>

                    <p className="text-sm text-zinc-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SpotlightCard>
  );
}
