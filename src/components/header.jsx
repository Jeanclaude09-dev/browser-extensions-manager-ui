import logo from "../assets/images/logo.svg";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

function Header() {
  return (
    <nav className="bg-neutral-0 flex justify-between items-center p-4 rounded-2xl shadow-xs">
      <img src={logo} alt="Extensions manager logo" />
      <div className="p-2 rounded-lg bg-neutral-300">
        <button className="cursor-pointer">
          <img src={moonIcon} alt="dark mode icon" />
        </button>
        <button className="cursor-pointer">
          <img src={sunIcon} alt="light mode icon hidden" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
