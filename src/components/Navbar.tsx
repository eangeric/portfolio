import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="fixed flex w-full justify-end p-4">
      <GiHamburgerMenu className="size-8 text-white" />
    </nav>
  );
}
