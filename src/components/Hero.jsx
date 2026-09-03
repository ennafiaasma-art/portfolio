import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-slate-950 px-6 pt-24">
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]"></div>
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Texte */}
        <div>
          <p className="mb-4 text-xl text-indigo-400">
            Bonjour 👋, je suis
          </p>

          <h1 className="text-6xl font-extrabold md:text-7xl">
            Asma <span className="text-indigo-500">Ennafia</span>
          </h1>

          <h2 className="mt-5 text-3xl text-slate-300">
            Développeuse Full Stack Junior
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Passionnée par le développement d'applications web modernes,
            je conçois des solutions performantes avec Laravel, React, PHP
            et MySQL.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/ennafiaasma-art"
              className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-700"
            >
              Voir mes projets
            </a>

            <a
              href="/cv_asma_ennafia_developpeur.pdf"
              className="rounded-xl border border-indigo-500 px-8 py-4 font-semibold transition hover:bg-indigo-600"
            >
              Télécharger CV
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-40 blur-3xl"></div>

            <img
              src={profile}
              alt="Asma Ennafia"
              className="relative h-80 w-80 rounded-full border-4 border-indigo-500 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;