import { Menu, X, CircleUserRound } from "lucide-react";
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../constants/navigation";
import { SECTION_IDS } from "../constants/sections";

type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

function Navbar() {
  const [activeSection, setActiveSection] = useState<SectionId>(
    SECTION_IDS.home
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center px-8 py-4 text-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30">
            <span className="text-lg font-extrabold">T</span>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              TaskFlow
            </h2>

            <p className="text-xs text-slate-400">
              Productivity Suite
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 md:block">
          <ul className="flex justify-center gap-8 text-lg">
            {NAV_ITEMS.map((item) => {
              const section = item.href.replace("#", "") as SectionId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(section)}
                    className={`block rounded-md px-4 py-2 transition-all duration-300 ${activeSection === section
                      ? "bg-slate-800 text-blue-400"
                      : "hover:bg-slate-800 hover:text-blue-400"
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Login */}
        <div className="hidden flex-1 justify-end md:flex">
          <button className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800">
            <CircleUserRound size={22} />
            <span className="font-semibold">Login</span>
          </button>
        </div>

        {/* Mobile Button */}
        <div className="flex flex-1 justify-end md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 transition-colors hover:bg-slate-800"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 md:hidden">
          <ul className="flex flex-col p-4">
            {NAV_ITEMS.map((item) => {


              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() =>
                      setActiveSection(item.href.replace("#", "") as SectionId)
                    }
                    className={`block rounded-md px-4 py-2 transition-all duration-300 ${activeSection === item.href.replace("#", "")
                      ? "bg-slate-800 text-blue-400"
                      : "text-white hover:bg-slate-800 hover:text-blue-400"
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;