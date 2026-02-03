import logo from "../assets/images/logo.svg";
import ThemeToggle from "./themeToggle";

function Header() {
  return (
    <nav className="bg-neutral-0 flex justify-between items-center p-4 rounded-2xl shadow-xs dark:bg-neutral-800">
      <img
        src={logo}
        alt="Extensions manager logo"
        className="dark:invert dark:brightness-0 dark:contrast-100" //I turned it all white cuz I don't know how to midify the svg code
      />
      <ThemeToggle />
    </nav>
  );
}

export default Header;
