import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-center m-8 gap-x-12 text-3xl">
      <a
        href="https://www.linkedin.com/in/eric-eang-57643b246/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/eangeric"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/pipknight3/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaInstagram />
      </a>
    </nav>
  );
}
