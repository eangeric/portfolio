import {
  FaArrowDown,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center py-24">
        <div className="w-full max-w-5xl text-center">
          <div className="mx-auto max-w-4xl animate-fade-up">
            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="text-blue-400 transition-all duration-300 hover:text-blue-300 hover:[text-shadow:0_0_24px_rgba(96,165,250,0.45)]">
                Eric Eang
              </span>
            </h1>
            <p className="mt-4 text-2xl font-semibold text-blue-200 sm:text-3xl">
              QA Engineer & Software Engineer
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <a
                href="#about"
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-lg font-bold text-white shadow-lg shadow-blue-950/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400 sm:w-44"
              >
                About Me
              </a>
              <a
                href="#skills"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3 text-lg font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-500/20 sm:w-44"
              >
                View Skills
              </a>
            </div>
            <div className="mt-9 flex items-center justify-center gap-6 text-3xl">
              <a
                href="mailto:ericeang3@gmail.com"
                aria-label="Email Eric"
                className="inline-flex p-2 text-white transition-all hover:-translate-y-0.5 hover:text-blue-400"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/eric-eang-57643b246/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex p-2 text-white transition-all hover:-translate-y-0.5 hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className={`${
          showArrow ? "opacity-100" : "pointer-events-none opacity-0"
        } flex justify-center pb-8 transition-opacity duration-300 ease-in-out hover:opacity-80`}
      >
        <FaArrowDown className="size-8 animate-bounce text-blue-200" />
      </a>
    </section>
  );
}
