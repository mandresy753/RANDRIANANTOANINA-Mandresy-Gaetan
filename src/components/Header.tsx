import Navbar from "./Navbar";

function Header() {
    const links = ["Home", "About", "Skills", "Projects", "Contact"]
  return (
    <header>
      <h1>Mon Portfolio</h1>
      <Navbar links={links}/>
    </header>
  );
}

export default Header;
