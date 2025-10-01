import {
  FaBootstrap,
  FaDocker,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaPhp,
} from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import {
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import LogoLoop from "./ui/LogoLoop";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <FaFigma />,
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: <FaHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    node: <IoLogoCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <IoLogoJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <FaBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  {
    node: <FaPhp />,
    title: "PHP",
    href: "https://www.php.net",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <SiN8N />,
    title: "n8n",
    href: "https://n8n.io",
  },
  {
    node: <SiShadcnui />,
    title: "shadcn/ui",
    href: "https://ui.shadcn.com",
  },
  {
    node: <FaGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <IoLogoVercel />,
    title: "Vercel",
    href: "https://vercel.com",
  },
  {
    node: <RiSupabaseFill />,
    title: "Supabase",
    href: "https://supabase.com",
  },
  {
    node: <FaDocker />,
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    node: <GrGraphQl />,
    title: "GraphQL",
    href: "https://graphql.org",
  },
  {
    node: <SiPrisma />,
    title: "Prisma",
    href: "https://www.prisma.io",
  },
  {
    node: <TbBrandSocketIo />,
    title: "Socket.IO",
    href: "https://socket.io",
  },
];

// Alternative with image sources

export default function Tools() {
  return (
    <div
      className="section "
      style={{ height: "100px", position: "relative", overflow: "hidden" }}
    >
      <LogoLoop
        logos={techLogos}
        speed={40}
        direction="left"
        logoHeight={60}
        gap={80}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
