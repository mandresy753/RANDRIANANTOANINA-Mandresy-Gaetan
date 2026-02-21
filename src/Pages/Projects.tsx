import Tracker from "/src/assets/images/expense tracker.webp";
import Pokedex from "/src/assets/images/pokedex.webp"

function Projects() {
    const projects = [
  {
    name: "Web2 Expense Tracker",
    url: "https://github.com/Arnel-rah/web2-expense-tracker.git",
    description: "Application pour suivre les dépenses avec React et PostgeSQL en local",
    image:Tracker
  },
  {
    name: "Pokedex React",
    url: "https://github.com/NyRalaivao/pokedexReact.git",
    description: "Application Pokedex en React avec API Pokemon",
    image:Pokedex
  }
];

    return(
        <section id="Projects" className="w-full h-screen p-6 border-4 ">
            <h2 className="text-3xl font-bold mb-6 text-center">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map(project => (
                    <div key={project.name} className="border rounded shadow p-4 flex flex-col justify-between">
                    <h3 className="font-semibold text-2xl mb-2">{project.name}</h3>
                    <p className="text-base md:text-lg lg:text-xl text-justify mb-4">{project.description}</p>
                    <img 
                        src={project.image} 
                        alt={project.name} 
                    />
                    <a 
                        href={project.url} 
                        target="_blank" 
                        className="ml-auto mt-4 px-4 py-2 bg-blue-500 text-white  font-semibold rounded hover:bg-blue-600 transition"
                    >
                        Voir sur GitHub 
                    </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects