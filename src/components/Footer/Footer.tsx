import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172A]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
        {/* Copyright */}
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <FaFacebook size={22} className="text-slate-400 hover:text-white cursor-pointer" />
          </a>

          <a
            href="#"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <FaInstagram size={22} className="text-slate-400 hover:text-white cursor-pointer" />
          </a>

          {/* X (Twitter) */}
          <a
            href="#"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <FaXTwitter size={22} className="text-slate-400 hover:text-white cursor-pointer" />
          </a>

          <a
            href="#"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <FaGithub size={22} className="text-slate-400 hover:text-white cursor-pointer" />
          </a>

          <a
            href="#"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <FaYoutube size={22} className="text-slate-400 hover:text-white cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
}