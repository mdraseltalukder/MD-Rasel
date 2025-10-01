import { Suspense } from "react";
import ProjectCard from "@/components/ProjectCard";
import { TextSplitter } from "@/components/ui/TextSplitter";

const works = [
  {
    imgSrc: "/images/project-8.jpg",
    title: "Fizzi 3D Landing Page",
    description: "a scroll-animated 3D e-commerce product landing page",
    tags: [
      "Next.js",
      "Prismic ",
      "Tree.js",
      "React-tree-fiber",
      "GSAP",
      "TypeScript ",
      "Frontend Development",
    ],
    projectLink: "https://fizzi-sand.vercel.app/",
  },
  {
    imgSrc: "/images/project-7.jpg",
    title: "Asbab Furniture",
    description: "an E-commerce Website",
    tags: ["PHP", "MYSQL", "bootstrap", "Development"],
    projectLink: "https://asbab-furniture.wuaze.com/",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "NextStep",
    description: "A Job Portal website",
    tags: ["ReactJS", "GSAP", "Clerk Auth", "Supabase", "Development"],
    projectLink: "https://next-step-job.vercel.app/",
  },
  {
    imgSrc: "/images/project6.jpg",
    title: "Coffee-Blend",
    description: "A Coffee Booking and Delivery website",
    tags: ["PHP", "MYSQL", "bootstrap", "Development"],
    projectLink: "https://coffee-blend.wuaze.com",
  },
  // {
  //   imgSrc: "/images/project-2.jpg",
  //   title: "PlumbRight",
  //   description: "Plumbing website",
  //   tags: ["ReactJS", "GSAP", "Development"],
  //   projectLink: "https://plumb-right.vercel.app/",
  // },
  {
    imgSrc: "/images/project-4.jpg",
    title: "SafeGrow",
    description: "Medical website",
    tags: ["ReactJS", "GSAP", "Development"],
    projectLink: "https://safegrow-medical.vercel.app/",
  },
  // {
  //   imgSrc: "/images/project-1.jpg",
  //   title: "WorkNest",
  //   description: "Real-State website",
  //   tags: ["HTML/CSS", "Design", "Development"],
  //   projectLink: "https://work-nest-ten.vercel.app/",
  // },

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
        <h2 className="headline-2 mb-8 section-heading">
          <TextSplitter text="My portfolio highlights" />
        </h2>

        <div className="grid gap-x-5 gap-y-8 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(
            ({ imgSrc, title, tags, projectLink, description }, key) => (
              <Suspense key={key}>
                <ProjectCard
                  imgSrc={imgSrc}
                  title={title}
                  tags={tags}
                  projectLink={projectLink}
                  description={description}
                  classes=""
                />
              </Suspense>
            )
          )}
        </div>
      </div>
    </section>
  );
}
