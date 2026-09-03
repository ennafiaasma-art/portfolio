import profile from "../assets/profile.png";
function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-12 text-center">
          À propos de moi
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

           <div className="flex justify-center">

    <div className="relative">

      <div className="absolute inset-0 rounded-full bg-indigo-600 blur-3xl opacity-40 animate-pulse"></div>

      <img
        src={profile}
        alt="Asma Ennafia"
        className="relative w-80 h-80 rounded-full object-cover border-4 border-indigo-500 shadow-2xl"
      />

    </div>
     

  </div>

          <div>

            <p className="text-slate-300 leading-8 text-lg">
              Je suis une développeuse Full Stack Junior passionnée par le
              développement d'applications web modernes.
            </p>

            <p className="text-slate-400 leading-8 mt-6">
              Je maîtrise PHP, Laravel, JavaScript, React,
              MySQL et Tailwind CSS à travers plusieurs projets
              académiques.
            </p>

            <p className="text-slate-400 leading-8 mt-6">
              Rigoureuse, motivée et curieuse,
              je souhaite rejoindre une équipe afin de développer
              mes compétences et participer à des projets innovants.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;