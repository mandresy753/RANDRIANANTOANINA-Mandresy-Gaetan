type NavbarProps = {
  links: string[];
};

function Navbar({ links }: NavbarProps) {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
