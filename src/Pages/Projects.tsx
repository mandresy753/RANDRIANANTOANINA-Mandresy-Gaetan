import Tracker from "/src/assets/images/expense tracker.webp";
import Pokedex from "/src/assets/images/pokedex.webp";

function Projects() {
  const projects = [
    {
      name: "Web2 Expense Tracker",
      url: "https://github.com/Arnel-rah/web2-expense-tracker.git",
      description:
        "Application pour suivre les dépenses avec React et PostgeSQL en local",
      image: Tracker,
    },
    {
      name: "Pokedex React",
      url: "https://github.com/NyRalaivao/pokedexReact.git",
      description: "Application Pokedex en React avec API Pokemon",
      image: Pokedex,
    },
  ];

  return (
    <section id="projects" className="w-full px-6 py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Mes <span className="text-blue-500">Projets</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="
              rounded-lg
              shadow-lg
              bg-white
              transition-transform duration-300
              hover:-translate-y-1 hover:shadow-2xl
              flex flex-col
              w-full sm:w-96
            "
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-contain"
            />

            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-2xl mb-2">{project.name}</h3>
              <p className="text-gray-700 text-base md:text-lg mb-4 flex-1">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-start px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
              >
                Voir sur GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;