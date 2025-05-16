import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    // { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const sideBarLinks = [{ href: "#home", label: "Home" }, ...navLinks];

  return (
    <>
      <div className="relative">
        {isOpen ? (
          <FaXmark
            className="xl:hidden flex justify-end items-center fixed top-4 right-4 text-3xl z-20 animate-enter"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        ) : (
          <FaBars
            className="xl:hidden flex justify-end items-center fixed top-4 right-4 text-3xl z-20 animate-enter"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
        {isOpen && (
          <nav className="w-full sm:w-64 xl:hidden flex flex-col justify-start items-center fixed top-0 right-0 h-screen text-xl bg-black z-10 pt-20 animate-enter overflow-y-auto ">
            {sideBarLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-nowrap flex justify-center bg-transparent px-4 border-b-2 border-b-blue-500 transition-all hover:bg-blue-600 hover:underline w-full py-4"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
      <nav className="hidden xl:flex justify-end items-center absolute top-4 right-8 text-xl gap-8">
        {navLinks.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            className="w-28 text-nowrap flex justify-center bg-transparent px-4 py-1 rounded-2xl border-2 transition-all hover:bg-blue-600 hover:underline"
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
