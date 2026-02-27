import type { ReactNode } from "react";

type NavLink = {
  name: string;
  icon: React.ReactNode;
};

type NavbarProps = {
  links: NavLink[];
};

function Navbar({ links }: NavbarProps) {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex gap-6 px-8 py-4 bg-white/30 backdrop-blur-xl rounded-full shadow-lg border border-white/20">
        {links.map((link) => (
          <li key={link.name} className="flex items-center gap-2">
            {link.icon}
            <a
              href={`#${link.name.toLowerCase()}`}
              className="font-medium text-gray-700 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;