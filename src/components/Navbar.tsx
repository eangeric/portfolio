import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-center m-8 gap-x-12 text-3xl">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedin />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaGithub />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaInstagram />
      </a>
    </nav>
  );
}
