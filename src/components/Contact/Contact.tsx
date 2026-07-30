import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";
import { SECTION_IDS } from "../../constants/sections";
function Contact() {
  return (
    <section className="relative overflow-hidden py-24" id={SECTION_IDS.contact}>
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Let's Build Something Amazing Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Have a question, a project idea, or want to explore how TaskFlow can
            help your team? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            <ContactBanner />
            <ContactForm />
            {/* ContactForm */}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;