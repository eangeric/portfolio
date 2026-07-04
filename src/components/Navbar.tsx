import { useState } from "react";
import { FaBars, FaEnvelope, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    // { href: "#projects", label: "Projects" },
  ];

  return (
    <div className="fixed right-5 top-5 z-20">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/45 text-xl text-white shadow-lg shadow-black/20 backdrop-blur transition-all hover:border-blue-400 hover:bg-blue-500/20"
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>

      {isOpen && (
        <nav className="absolute right-0 mt-3 w-48 overflow-hidden rounded-lg border border-white/10 bg-gray-950/90 p-2 shadow-2xl shadow-black/30 backdrop-blur">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex justify-center rounded-md px-4 py-3 text-center font-semibold text-gray-200 transition-colors hover:bg-blue-500/20 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:ericeang3@gmail.com"
            onClick={() => setIsOpen(false)}
            className="mt-1 flex items-center justify-center gap-3 rounded-md bg-blue-500 px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-400"
          >
            <FaEnvelope />
            Email Me
          </a>
        </nav>
      )}
    </div>
  );
}
