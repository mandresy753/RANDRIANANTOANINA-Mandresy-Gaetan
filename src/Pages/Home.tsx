function Home() {
    return (
        <section className="flex flex-col md:flex-row gap-15 p-25">
            <div className="Home-Left">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corrupti recusandae qui voluptatum neque, necessitatibus error sapiente, 
                    omnis a suscipit voluptatibus ut impedit hic distinctio excepturi atque cum. 
                    Mollitia, officiis aspernatur.</p>
            </div>
            <div className="Home-Right">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal md:font-semibold lg:font-bold text-center">
                Bonjour, je suis <strong>RANDRIANANTOANINA Mandresy Gaëtan</strong>
                </h1>
                <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-center mt-2">
                Développeur Full Stack & Administrateur Systèmes et Réseaux
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed mt-4">
                    Passionné par le développement et la gestion des systèmes, je crée des solutions performantes et sécurisées, alliant innovation et fiabilité. Toujours curieux et motivé, je transforme les idées en projets concrets ayant un impact réel.
                </p>
            </div>
        </section>
    );
}

export default Home;