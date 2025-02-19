import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-2.jpg",
    title: "PlumbRight",
    description: "Plumbing website",
    tags: ["ReactJS", "GSAP", "Development"],
    projectLink: "https://plumb-right.vercel.app/",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "SafeGrow",
    description: "Medical website",
    tags: ["ReactJS", "GSAP", "Development"],
    projectLink: "https://safegrow-medical.vercel.app/",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "WorkNest",
    description: "Real-State website",
    tags: ["HTML/CSS", "Design", "Development"],
    projectLink: "https://work-nest-ten.vercel.app/",
  },

  {
    imgSrc: "/images/project-3.jpg",
    title: "GoldenFork ",
    description: "Restaurant website",
    tags: ["Development", "Tailwind CSS"],
    projectLink: "https://restaurant-website-nine-alpha.vercel.app/",
  },

  // {
  //   imgSrc: "/images/project-5.jpg",
  //   title: "eCommerce website",
  //   tags: ["eCommerce", "Development"],
  //   projectLink: "#",
  // },
  // {
  //   imgSrc: "/images/project-6.jpg",
  //   title: "vCard Personal portfolio",
  //   tags: ["Web-design", "Development", "Next JS"],
  //   projectLink: "#",
  // },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 ">My portfolio highlights</h2>

        <div
          className="grid gap-x-5 gap-y-8 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          {works.map(
            ({ imgSrc, title, tags, projectLink, description }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                description={description}
                classes=""
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
