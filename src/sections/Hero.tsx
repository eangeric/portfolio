import {
  FaArrowDown,
  FaLinkedin,
} from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowCaret(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center py-24">
        <div className="w-full max-w-5xl text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-blue-400">Eric Eang</span>
            </h1>
            <p className="mt-4 text-2xl font-semibold text-blue-200 sm:text-3xl">
              QA Engineer & Software Engineer
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-lg font-bold text-white shadow-lg shadow-blue-950/30 transition-colors hover:bg-blue-400"
              >
                About Me
              </a>
              <a
                href="#skills"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3 text-lg font-bold text-white backdrop-blur transition-colors hover:border-blue-300 hover:bg-blue-500/20"
              >
                View Skills
              </a>
              <a
                href="https://www.linkedin.com/in/eric-eang-57643b246/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur transition-colors hover:border-blue-300 hover:bg-blue-500/20 hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          showCaret ? "opacity-100" : "opacity-0"
        } flex justify-center pb-8 transition-opacity duration-300 ease-in-out`}
      >
        <FaArrowDown className="size-8 animate-bounce text-blue-200" />
      </div>
    </section>
  );
}
