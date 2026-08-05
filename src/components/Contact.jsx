function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950"
    >

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold mb-12">
          Contact
        </h2>

        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-10">

          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-4 rounded-xl bg-slate-800 mb-5"
          />

          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-4 rounded-xl bg-slate-800 mb-5"
          />

          <textarea
            rows="5"
            placeholder="Votre message"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <button
            className="mt-8 bg-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-700"
          >
            Envoyer
          </button>

        </div>

      </div>

    </section>
  );
}

export default Contact;