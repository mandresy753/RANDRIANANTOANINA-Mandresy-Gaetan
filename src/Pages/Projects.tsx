import Tracker from "/src/assets/images/expense tracker.webp";
import Pokedex from "/src/assets/images/pokedex.webp";
import Portfolio from "/src/assets/images/portfolio.webp"
import { useInView } from "../hooks/useInView";

const projects = [
  {
    name: "Web2 Expense Tracker",
    url: "https://github.com/Arnel-rah/web2-expense-tracker.git",
    description: "Application pour suivre les dépenses avec React et PostgreSQL en local",
    image: Tracker,
  },
  {
    name: "Pokedex React",
    url: "https://github.com/NyRalaivao/pokedexReact.git",
    description: "Application Pokedex en React avec API Pokemon",
    image: Pokedex,
  },
  {
    name: "Mon portfolio",
    url: "",
    description: "Mon univers web : découvrez mes projets et mes compétences en un coup d'œil !",
    image: Portfolio,
  },  
];

function Projects() {
  const titleRef = useInView<HTMLHeadingElement>(0.3);

  return (
    <section
      id="projets"
      className="w-full min-h-screen px-6 py-20 overflow-hidden
      bg-gray-50 dark:bg-[#1e293b] transition-colors duration-500"
    >
      <h2
        ref={titleRef.ref}
        className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700
        ${titleRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        text-slate-900 dark:text-slate-50`}
      >
        Mes <span className="text-blue-500 dark:text-blue-400">Projets</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => {
          const card = useInView<HTMLDivElement>(0.3);

          return (
            <div
              key={project.name}
              ref={card.ref}
              className={`group flex flex-col w-full sm:w-96 rounded-2xl overflow-hidden
              transition-all duration-700 transform
              ${card.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}

              bg-white shadow-lg border border-gray-200
              hover:shadow-2xl hover:-translate-y-2

              dark:bg-slate-800 dark:border-slate-700
              dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
              dark:hover:border-blue-400/50`}
            >
              <div className="overflow-hidden bg-white dark:bg-slate-700/30">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-2xl mb-2 text-slate-900 dark:text-slate-50">
                  {project.name}
                </h3>

                <p className="text-gray-700 dark:text-slate-300 text-base md:text-lg mb-6 flex-1">
                  {project.description}
                </p>

                {project.url &&
                  <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto self-start px-5 py-2.5 rounded-lg font-semibold transition-all
                  bg-blue-500 text-white hover:bg-blue-600
                  dark:bg-blue-600 dark:hover:bg-blue-500 active:scale-95"
                >
                  Voir sur GitHub
                </a>
                }
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;