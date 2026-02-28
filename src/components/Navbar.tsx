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
      <ul className="flex gap-6 px-6 py-4 bg-white/30 backdrop-blur-xl rounded-full shadow-lg border border-white/20">
        {links.map((link) => (
          <li
            key={link.name}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition"
          >
            <a
              href={`#${link.name.toLowerCase()}`}
              className="flex items-center gap-2"
              aria-label={link.name}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="hidden md:inline font-medium">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;