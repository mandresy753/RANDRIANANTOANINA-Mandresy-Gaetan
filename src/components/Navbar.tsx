type NavbarProps = {
  links: string[];
};

function Navbar({ links }: NavbarProps) {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex gap-6 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-lg">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="font-medium text-gray-700 hover:text-blue-500 transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;