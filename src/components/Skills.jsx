const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "PHP",
  "Laravel",
  "MySQL",
  "Git",
  "GitHub",
  "Figma",
  "Jira",
  "Trello",
  "Linux"
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold mb-16">
          Mes compétences
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map(skill => (

            <div
              key={skill}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:scale-105 hover:border-indigo-500"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;