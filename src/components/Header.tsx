import Navbar from "./Navbar";

function Header() {
    const links = ["Home", "About", "Skills", "Projects"]
  return (
    <header>
      <Navbar links={links}/>
    </header>
  );
}

export default Header;
