import profileImg from "/src/assets/images/my_photo.webp";

function Home() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-20 from-white to-gray-50"
    >
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Bonjour, je suis <span className="text-blue-500">RANDRIANANTOANINA Mandresy Gaëtan</span>
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl text-gray-700 font-semibold">
          Développeur Full Stack & Administrateur Systèmes et Réseaux
        </h2>
        <p className="mt-6 text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
          Passionné par le développement et la gestion des systèmes, je crée des solutions performantes et sécurisées, alliant innovation et fiabilité. Toujours curieux et motivé, je transforme les idées en projets concrets ayant un impact réel.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-6">
          <button
            onClick={() => {
              const projects = document.getElementById("projects");
              projects?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition text-white font-bold px-6 py-3 rounded-lg shadow-lg"
          >
            Mes Projets
          </button>
          <button className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition text-blue-500 font-bold px-6 py-3 rounded-lg">
            Me Contacter
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={profileImg}
          alt="Photo de RANDRIANANTOANINA Mandresy Gaëtan"
          className="w-100 h-100 md:w-80 md:h-80 lg:w-140 lg:h-140 object-contain rounded-full border-4 border-blue-500 shadow-xl"
        />
      </div>
    </section>
  );
}

export default Home;