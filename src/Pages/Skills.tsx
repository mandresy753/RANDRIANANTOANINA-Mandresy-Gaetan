import { useInView } from "../hooks/useInView";

type Skill = {
  name: string;
  icon?: string;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

const technicalSkillsByCategory: SkillCategory[] = [
  {
    category: "Langages",
    skills: [
      { name: "JavaScript", icon: "/icons/js.webp" },
      { name: "Java", icon: "/icons/java.webp" },
    ],
  },
  {
    category: "Web",
    skills: [
      { name: "HTML", icon: "/icons/html-5.webp" },
      { name: "CSS", icon: "/icons/css-3.webp" },
      { name: "JavaScript", icon: "/icons/js.webp" },
    ],
  },
  {
    category: "Frameworks",
    skills: [{ name: "React", icon: "/icons/react.svg" }],
  },
  {
    category: "UI Frameworks",
    skills: [
      { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    ],
  },
  {
    category: "Back-end",
    skills: [{ name: "Express.js", icon: "/icons/express.png" }],
  },
  {
    category: "Base de données",
    skills: [{ name: "PostgreSQL", icon: "/icons/postgresql.webp" }],
  },
];

const softSkills: Skill[] = [
  { name: "Esprit d’analyse" },
  { name: "Travail en équipe" },
  { name: "Autonomie" },
  { name: "Communication" },
  { name: "Gestion du temps" },
  { name: "Adaptabilité" },
  { name: "Résolution de problèmes" },
  { name: "Curiosité technique" },
];

function Skills() {
  const heading = useInView<HTMLHeadingElement>(0.3);
  const hardSkillsRef = useInView<HTMLDivElement>(0.3)
  const softSkillsRef = useInView<HTMLDivElement>(0.3)
  return (
    <section id="skills" className="w-full min-h-screen 5px-6 py-20">
      <h2
      ref={heading.ref}
      className={`text-4xl font-bold text-center mb-20
      transition-all duration-800 ease-out
      ${heading.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
  `}
>
        Mes <span className="text-blue-500">Compétences</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div 
        ref={hardSkillsRef.ref}
        className=
        {`"bg-white rounded-3xl p-10 shadow-lg border border-gray-200 
          transition-all duration-800 ease-in
        ${hardSkillsRef.isVisible? "opacity-100 translate-x-0":"opacity-0 -translate-x-10" }`}>
          <h3 className="text-2xl font-semibold mb-10 text-center">
            Compétences techniques
          </h3>

          {technicalSkillsByCategory.map((category) => (
            <div key={category.category}   className={`mb-8`}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                {category.category}
              </h4>

              <ul className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-500 transition"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-4 h-4"
                      />
                    )}
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div ref={softSkillsRef.ref}
        className={`bg-white rounded-3xl p-10 shadow-lg border border-gray-200
        transition-all duration-800 ease-in
        ${softSkillsRef.isVisible? "opacity-100  translate-x-0":"opacity-0 translate-x-10" }`} >
          <h3 className="text-2xl font-semibold mb-10 text-center">
            Compétences comportementales
          </h3>

          <ul className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill) => (
              <li
                key={skill.name}
                className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-blue-700 hover:bg-blue-100 transition"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;