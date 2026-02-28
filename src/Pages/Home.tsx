import profileImg from "/src/assets/images/my_photo.webp";

function Home() {
    return (
        <section className="
            flex flex-col md:flex-row
            gap-6 md:gap-10
            p-8 md:p-8 lg:px-18
        " id="home">
            <div className="Home-Left">
                <img src={profileImg} alt="Photo de RANDRIANANTOANINA Mandresy Gaëtan" />
            </div>
            <div className="Home-Right flex flex-col items-center justify-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal md:font-semibold lg:font-bold text-center">
                Bonjour, je suis <strong>RANDRIANANTOANINA Mandresy Gaëtan</strong>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-center mt-2">
                Développeur Full Stack & Administrateur Systèmes et Réseaux
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed mt-4">
                    Passionné par le développement et la gestion des systèmes, je crée des solutions performantes et sécurisées, alliant innovation et fiabilité. Toujours curieux et motivé, je transforme les idées en projets concrets ayant un impact réel.
                </p>
                <div className="Home-Right-Button flex flex-col md:flex-row m-12 gap-8">
                    <button 
                        className="bg-blue-600 p-2.5 rounded-lg text-white"
                        onClick={()=> {
                            const Projects = document.getElementById("projects")
                            Projects?.scrollIntoView({behavior: "smooth"})
                        }}
                    >Mes Projets
                    </button>
                    <button className="bg-blue-600 p-2.5 rounded-lg text-white">Me Contacter</button>
                </div>
            </div>
        </section>
    );
}

export default Home;