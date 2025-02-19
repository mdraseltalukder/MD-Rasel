import { Briefcase, Building2, Calendar } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
const experiences = [
  {
    role: "Full Stack Developer",
    company: "Web Battalion",
    period: "2023 - 2024",
    description: [
      "Developed and maintained multiple client-facing web applications",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Collaborated with UX team to improve user experience",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Codemanbd",
    period: "2022 - 2023",
    description: [
      "Built interactive user interfaces using React and TypeScript",
      "Integrated REST APIs and implemented state management",
      "Participated in agile development processes",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 experience">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My journey in the tech industry
          </p>
        </div>

        <div
          className="space-y-8"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {experiences.map((exp, index) => (
            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.2)"
              key={index}
              className="bg-zinc-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl custom-spotlight-card"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-[#00e7f8]" />
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0 text-[#00e7f8]">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00e7f8] flex-shrink-0"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
