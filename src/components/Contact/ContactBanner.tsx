import ContactInfo from "./ContactInfo";

function ContactBanner() {

  return (
    <div>
      <h2 className="text-5xl font-bold text-white pb-4">Get in Touch</h2>
      <p className="mt-6 max-w-md text-lg leading-8 text-slate-400"> We're here to help. Send us a message, and our team will respond promptly to answer your questions and discuss your needs.</p>
      <ContactInfo />

      {/* <img
        src={contactBanner}
        alt="Contact Banner"
        className="w-full rounded-2xl"
      /> */}
    </div>
  );
}

export default ContactBanner;
