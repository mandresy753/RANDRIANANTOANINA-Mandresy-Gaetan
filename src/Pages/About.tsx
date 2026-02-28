function About() {
  return (
    <section
      id="about"
      className="w-full bg-gray-50 px-6 py-20 flex flex-col items-center gap-8 md:gap-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        A Propos de <span className="text-blue-500">Moi</span>
      </h2>

      <div className="max-w-4xl flex flex-col gap-6">
        <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
          Animé par une forte curiosité pour le numérique et motivé par l’envie constante de progresser, 
          je suis un étudiant en informatique qui s’investit pleinement dans son parcours académique et personnel. 
          J’ai choisi ce domaine pour son aspect concret et sa capacité à apporter des solutions utiles à des problématiques réelles, 
          aussi bien techniques qu’humaines.

          Mon parcours m’a permis de développer une vision structurée du travail, basée sur l’analyse, l’organisation 
          et la persévérance. Habitué aux projets collectifs comme au travail individuel, je sais m’adapter à différents contextes, 
          collaborer efficacement et m’impliquer avec sérieux pour mener un projet à son terme, même sous contrainte de temps ou de pression.
        </p>

        <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
          Au-delà des aspects techniques, j’accorde une grande importance à la communication, à l’écoute et au respect du travail en équipe. 
          Je cherche continuellement à améliorer ma capacité à m’exprimer avec clarté, à prendre la parole avec assurance et à transmettre mes idées de manière simple et efficace.

          Ma démarche s’inscrit dans une volonté d’évolution continue, à travers des expériences concrètes, des projets stimulants et un engagement personnel constant.
          Mon objectif est de contribuer positivement aux projets auxquels je participe, tout en construisant un parcours solide, cohérent et porteur de sens.
        </p>
      </div>

      <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-lg">
        Télécharger Mon C.V
      </button>
    </section>
  );
}

export default About;