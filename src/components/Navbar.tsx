import { useEffect, useRef, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    // { href: "#projects", label: "Projects" },
  ];

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed right-[calc(env(safe-area-inset-right)+1.25rem)] top-[calc(env(safe-area-inset-top)+1.25rem)] z-20"
    >
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-blue-300/25 bg-[#00091d]/75 text-xl text-blue-100 shadow-lg shadow-blue-950/30 backdrop-blur transition-all hover:border-blue-300 hover:bg-blue-500/20 hover:text-white"
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>

      {isOpen && (
        <nav className="absolute right-0 mt-3 w-48 origin-top-right overflow-hidden rounded-lg border border-blue-300/20 bg-[#00091d]/95 p-2 shadow-2xl shadow-blue-950/30 backdrop-blur animate-popover">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex cursor-pointer justify-center rounded-md px-4 py-3 text-center font-semibold text-blue-100 transition-colors hover:bg-blue-500/20 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
