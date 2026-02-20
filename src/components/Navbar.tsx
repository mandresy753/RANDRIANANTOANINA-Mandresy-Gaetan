type NavbarProps = {
  links: string[];
};

function Navbar({ links }: NavbarProps) {
  return (
    <nav>
      <ul className="flex gap-8 px-15 py-5 bg-amber-100">
        {links.map((link) => (
          <li key={link}><a href={link}>{link}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
