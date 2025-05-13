export default function Navbar() {
  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const linkStyle =
    "w-28 text-nowrap flex justify-center bg-linear-to-b from-white to-gray-300 text-blue-500 px-4 py-1 rounded-2xl border-blue-500 border-2 hover:bg-blue-50 transition";

  return (
    <nav className="flex justify-end items-center m-4 text-xl gap-8">
      {navLinks.map(({ href, label }) => (
        <a key={label} href={href} className={linkStyle}>
          {label}
        </a>
      ))}
    </nav>
  );
}
