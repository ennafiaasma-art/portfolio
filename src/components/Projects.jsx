function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold mb-16">
          Mes projets
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8">

            <h3 className="text-3xl font-bold mb-5">
              LinkUp
            </h3>

            <p className="text-slate-400 leading-8">
              Réseau social professionnel développé avec Laravel,
              permettant l'authentification,
              les publications,
              les commentaires et les likes.
            </p>

            <div className="flex gap-3 mt-8 flex-wrap">

              <span className="bg-indigo-600 px-4 py-2 rounded-full">
                Laravel
              </span>

              <span className="bg-indigo-600 px-4 py-2 rounded-full">
                React
              </span>

              <span className="bg-indigo-600 px-4 py-2 rounded-full">
                MySQL
              </span>

            </div>

          </div>

          <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8">

            <h3 className="text-3xl font-bold mb-5">
              BDE Events
            </h3>

            <p className="text-slate-400 leading-8">
              Plateforme de réservation des événements du campus,
              gestion des étudiants,
              des réservations
              et des tickets numériques.
            </p>

            <div className="flex gap-3 mt-8 flex-wrap">

              <span className="bg-purple-600 px-4 py-2 rounded-full">
                Laravel
              </span>

              <span className="bg-purple-600 px-4 py-2 rounded-full">
                PHP
              </span>

              <span className="bg-purple-600 px-4 py-2 rounded-full">
                MySQL
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;