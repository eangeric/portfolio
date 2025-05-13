import Navbar from "../components/Navbar";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCaretDown,
} from "react-icons/fa6";
export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-col justify-center items-center text-center flex-grow mt-20">
        <h1 className="text-7xl font-extrabold">
          Hi I'm <span className="text-blue-500">Eric</span>
        </h1>
        <h2 className="text-5xl">A Software Engineer</h2>
        <h3 className="text-2xl max-w-128 mt-8">
          I specialize in full stack development and enjoy turning ideas into
          real world applications.
        </h3>
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
      </section>
      <div className="flex justify-center mt-auto mb-8">
        <FaCaretDown className="size-12 animate-bounce" />
      </div>
    </div>
  );
}
