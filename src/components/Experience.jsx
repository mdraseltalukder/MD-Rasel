import { Briefcase, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TechCorp Inc.",
    period: "2020 - Present",
    description: [
      "Led development of cloud-native applications using React and Node.js",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40% through optimization",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2018 - 2020",
    description: [
      "Developed and maintained multiple client-facing web applications",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Collaborated with UX team to improve user experience",
    ],
  },
  {
    role: "Frontend Developer",
    company: "WebTech Startup",
    period: "2016 - 2018",
    description: [
      "Built interactive user interfaces using React and TypeScript",
      "Integrated REST APIs and implemented state management",
      "Participated in agile development processes",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My journey in the tech industry
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-lime-400" />
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0 text-lime-400">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-400 flex-shrink-0"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
