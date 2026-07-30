import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features/Features";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const hero = {
  title: "Your AI teammate for getting work done.",
  subTitle: [
    "TaskFlow uses AI to organize your work,",
    "prioritize what matters, and automate",
    "repetitive work.",
  ],
  buttonTextClear: "Start Free",
  buttonTextDemo: "Watch Demo",
};

export const SECTION_IDS = {
  home: "home",
  features: "features",
  contact: "contact",
} as const;

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero hero={hero} />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;