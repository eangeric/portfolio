export default function Navbar() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const linkStyle =
    "w-28 text-nowrap flex justify-center bg-blue-500 px-4 py-1 rounded-2xl border-2 transition-all hover:bg-blue-600 hover:underline";

  return (
    <nav className="flex justify-end items-center p-4 text-xl gap-8 mr-8">
      {navLinks.map(({ href, label }) => (
        <a key={label} href={href} className={linkStyle}>
          {label}
        </a>
      ))}
    </nav>
  );
}
