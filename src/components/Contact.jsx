
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Titre */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-medium mb-3">
            Parlons ensemble
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Contactez-moi
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Vous avez un projet, une opportunité ou simplement envie
            d’échanger ? N’hésitez pas à me contacter.
          </p>
        </div>

        {/* Carte principale */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-10 shadow-2xl">

          {/* Informations */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">

            {/* Téléphone */}
            <a
              href="tel:+212718827621"
              className="group p-6 rounded-2xl bg-slate-800/70 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 text-2xl mb-4 group-hover:scale-110 transition">
                <Phone aria-hidden="true" size={24} />
              </div>

              <h3 className="font-semibold text-lg mb-2">
                Téléphone
              </h3>

              <p className="text-slate-400">
                07 18 82 76 21
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:ennafiaasma@gmail.com"
              className="group p-6 rounded-2xl bg-slate-800/70 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 text-2xl mb-4 group-hover:scale-110 transition">
                <Mail aria-hidden="true" size={24} />
              </div>

              <h3 className="font-semibold text-lg mb-2">
                Email
              </h3>

              <p className="text-slate-400 break-all">
                ennafiaasma@gmail.com
              </p>
            </a>

            {/* Localisation */}
            <div className="group p-6 rounded-2xl bg-slate-800/70 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 text-2xl mb-4 group-hover:scale-110 transition">
                <MapPin aria-hidden="true" size={24} />
              </div>

              <h3 className="font-semibold text-lg mb-2">
                Localisation
              </h3>

              <p className="text-slate-400">
                Azilal, Maroc
              </p>
            </div>

          </div>

          {/* Réseaux sociaux */}
          <div className="border-t border-slate-800 pt-8">

            <h3 className="text-xl font-semibold text-center mb-6">
              Retrouvez-moi sur
            </h3>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/ennafiaasma-art"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 px-7 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-white hover:bg-slate-700 transition-all duration-300"
              >
                <span aria-hidden="true" className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">GH</span>

                <div className="text-left">
                  <p className="text-xs text-slate-400">
                    Mon profil
                  </p>

                  <p className="font-semibold text-white">
                    GitHub
                  </p>
                </div>

                <span className="ml-3 text-slate-400 group-hover:text-white transition">
                  <ArrowUpRight aria-hidden="true" size={20} />
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 px-7 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-400 hover:bg-slate-700 transition-all duration-300"
              >
                <span aria-hidden="true" className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">in</span>

                <div className="text-left">
                  <p className="text-xs text-slate-400">
                    Mon profil
                  </p>

                  <p className="font-semibold text-white">
                    LinkedIn
                  </p>
                </div>

                <span className="ml-3 text-slate-400 group-hover:text-blue-400 transition">
                  <ArrowUpRight aria-hidden="true" size={20} />
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-8">
          © 2026 Asma Ennafia — Développeuse Full Stack Junior
        </p>

      </div>
    </section>
  );
}

export default Contact;