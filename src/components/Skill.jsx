import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/next.svg",
    label: "Next.Js",
    desc: "A React framework for production",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/html.svg",
    label: "Html",
    desc: "Markup Language",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  // {
  //   imgSrc: "/images/nodejs.svg",
  //   label: "NodeJS",
  //   desc: "Web Server",
  // },
  // {
  //   imgSrc: "/images/expressjs.svg",
  //   label: "ExpressJS",
  //   desc: "Node Framework",
  // },
  // {
  //   imgSrc: "/images/mongodb.svg",
  //   label: "MongoDB",
  //   desc: "Database",
  // },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "a framework ",
  },
  {
    imgSrc: "/images/wordpress.svg",
    label: "Wordpress",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/php.svg",
    label: "PHP",
    desc: "a scripting language",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL Database",
    desc: "database management system",
  },
  {
    imgSrc: "/images/gsap.png",
    label: "GSAP",
    desc: "JavaScript animation library",
  },
  {
    imgSrc: "/images/framer_motion.png",
    label: "Framer Motion",
    desc: "React animation library",
  },
  {
    imgSrc: "/images/shadcn.png",
    label: "shadcn/ui",
    desc: "Component library for React & Next.js",
  },
  {
    imgSrc: "/images/n8n.png",
    label: "n8n Automation",
    desc: "Workflow automation tool for connecting apps and APIs",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2    ">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] ">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div
          className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
        >
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes=" hover:text-[#00eeff]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
