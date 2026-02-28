import htmlIcon from "/src/assets/icons/html-5.webp";
import cssIcon from "/src/assets/icons/css-3.webp";
import jsIcon from "/src/assets/icons/js.webp";
import postgresIcon from "/src/assets/icons/postgresql.webp";
import javaIcon from "/src/assets/icons/java.webp";
import gitIcon from "/src/assets/icons/github.webp";

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "Java", icon: javaIcon },
  { name: "Git/Github", icon: gitIcon },
];

function Skills() {
  return (
    <section id="skills" className="w-full h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Mes Compétences</h2>
      <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col items-center p-2 border rounded-lg shadow hover:shadow-lg transition"
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
            <span className="font-semibold text-center">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
