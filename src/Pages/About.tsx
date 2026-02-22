function About(){
    return <section 
    className="
            flex flex-col
            gap-6 md:gap-10
            p-8 md:p-8 lg:px-18
        ">
            <h2 className="text-3xl font-bold mb-6 text-center">A Propos de Moi</h2>
        <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed mt-4">
            Animé par une forte curiosité pour le numérique et motivé par l’envie constante de progresser, 
            je suis un étudiant en informatique qui s’investit pleinement dans son parcours académique et personnel. 
            J’ai choisi ce domaine pour son aspect concret et sa capacité à apporter des solutions utiles à des problématiques réelles, 
            aussi bien techniques qu’humaines.

            Mon parcours m’a permis de développer une vision structurée du travail, basée sur l’analyse, l’organisation 
            et la persévérance. Habitué aux projets collectifs comme au travail individuel, je sais m’adapter à différents contextes, 
            collaborer efficacement et m’impliquer avec sérieux pour mener un projet à son terme, même sous contrainte de temps ou de pression.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed mt-4">
            Au-delà des aspects techniques, j’accorde une grande importance à la communication, à l’écoute et au respect du travail en équipe. 
            Je cherche continuellement à améliorer ma capacité à m’exprimer avec clarté, à prendre la parole avec assurance et à transmettre mes idées de manière simple et efficace.

            Ma démarche s’inscrit dans une volonté d’évolution continue, à travers des expériences concrètes, des projets stimulants et un engagement personnel constant.
             Mon objectif est de contribuer positivement aux projets auxquels je participe, tout en construisant un parcours solide, cohérent et porteur de sens.
        </p>
        <button className="m-auto bg-blue-600 p-2.5 rounded-lg text-white">Télécharger Mon C.V</button>
    </section>
}
export default About