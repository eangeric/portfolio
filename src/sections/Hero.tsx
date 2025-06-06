import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCaretDown,
  FaDownload,
} from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
export default function Hero() {
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowCaret(window.scrollY < 100); // hide if scrolled down more than 20px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center flex-grow mt-20">
        <h1 className="text-7xl font-extrabold">
          Hi I'm <span className="text-blue-500">Eric</span>
        </h1>
        <h2 className="text-5xl">A Software Engineer</h2>
        <div className="flex items-center justify-center m-8 gap-x-12 text-3xl">
          <a
            href="https://www.linkedin.com/in/eric-eang-57643b246/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin className="hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://github.com/eangeric"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaGithub className="hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/pipknight3/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaInstagram className="hover:text-blue-500 transition-colors" />
          </a>
        </div>
        <button className="border-2 border-white text-lg flex gap-2 items-center justify-center bg-transparent px-8 py-2 rounded-2xl cursor-pointer hover:bg-blue-500 hover:underline transition-colors">
          <FaDownload className="" />
          <a href="/resume.pdf" download="Eric_Eang_Resume">
            Download Resume
          </a>
        </button>
      </div>
      <div
        className={`${
          showCaret ? "opacity-100" : "opacity-0"
        } flex justify-center mt-auto mb-8 transition-opacity ease-in-out duration-300`}
      >
        <FaCaretDown className="size-12 animate-bounce" />
      </div>
    </div>
  );
}
