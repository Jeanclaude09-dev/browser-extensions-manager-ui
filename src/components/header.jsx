import logo from "../assets/images/logo.svg";
import ThemeToggle from "./themeToggle";

function Header() {
  return (
    <nav className="bg-neutral-0 flex justify-between items-center p-4 rounded-2xl shadow-xs">
      <img src={logo} alt="Extensions manager logo" />
      <ThemeToggle />
    </nav>
  );
}

export default Header;
