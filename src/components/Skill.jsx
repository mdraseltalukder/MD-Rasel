import SkillCard from "@/components/SkillCard";
import { TextSplitter } from "@/components/ui/TextSplitter";

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
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interactive Web Language",
  },
  {
    imgSrc: "/images/Typescript.svg",
    label: "typescript",
    desc: "Typed JavaScript Superset",
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
  // {
  //   imgSrc: "/images/wordpress.svg",
  //   label: "Wordpress",
  //   desc: "User Interface",
  // },
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
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB Database",
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
    imgSrc: "/images/github.png",
    label: "GitHub",
    desc: "Code Hosting Platform",
  },
  {
    imgSrc: "/images/vercel.png",
    label: "Vercel",
    desc: "Frontend Hosting Service",
  },
  {
    imgSrc: "/images/prisma.png",
    label: "Prisma",
    desc: "Database ORM Tool",
  },
  {
    imgSrc: "/images/grafql.png",
    label: "GraphQL",
    desc: "API Query Language",
  },
  {
    imgSrc: "/images/docker.png",
    label: "Docker",
    desc: "Containerization Platform",
  },

  {
    imgSrc: "/images/shadcn.png",
    label: "shadcn/ui",
    desc: "Component library ",
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
    imgSrc: "/images/n8n.png",
    label: "n8n Automation",
    desc: "Workflow Automation Tool",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 section-heading ">
          <TextSplitter text="Essential Tools I use" />
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] subheading ">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div
          className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"
          // data-aos="fade-up"
          // data-aos-offset="50"
          // data-aos-easing="ease-in-sine"
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
