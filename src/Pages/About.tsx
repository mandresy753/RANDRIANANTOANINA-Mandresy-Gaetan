import { useInView } from "../hooks/useInView";

function About() {
  const { ref, isVisible } = useInView(0.2);
  
  return (
    <section
      id="about"
      ref={ref}
      className="w-full min-h-screen bg-gray-50 dark:bg-[#1e293b] px-6 py-20 flex flex-col items-center transition-colors duration-500 overflow-hidden"
    >
      <div 
        className={`max-w-4xl flex flex-col items-center gap-8 md:gap-12 transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-slate-50">
          A Propos de <span className="text-blue-500 dark:text-blue-400">Moi</span>
        </h2>

        <div className="flex flex-col gap-6">
          <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed text-gray-700 dark:text-slate-300">
            Animé par une forte curiosité pour le numérique et motivé par l’envie constante de progresser, 
            je suis un étudiant en informatique qui s’investit pleinement dans son parcours académique et personnel. 
            J’ai choisi ce domaine pour son aspect concret et sa capacité à apporter des solutions utiles à des problématiques réelles, 
            aussi bien techniques qu’humaines.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed text-gray-700 dark:text-slate-300">
            Mon parcours m’a permis de développer une vision structurée du travail, basée sur l’analyse, l’organisation 
            et la persévérance. Habitué aux projets collectifs comme au travail individuel, je sais m’adapter à différents contextes, 
            collaborer efficacement et m’impliquer avec sérieux pour mener un projet à son terme, même sous contrainte de temps ou de pression.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed text-gray-700 dark:text-slate-300">
            Au-delà des aspects techniques, j’accorde une grande importance à la communication, à l’écoute et au respect du travail en équipe. 
            Je cherche continuellement à améliorer ma capacité à m’exprimer avec clarté, à prendre la parole avec assurance et à transmettre mes idées de manière simple et efficace.
          </p>
        </div>
        <button 
          className="mt-4 px-8 py-3 rounded-lg font-bold text-white transition-all duration-300
                     bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-blue-500/20
                     dark:bg-blue-500 dark:hover:bg-blue-400 active:scale-95"
        >
          Télécharger Mon C.V
        </button>
      </div>
    </section>
  );
}

export default About;