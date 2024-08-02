import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md blue-gradient_bg"
      >
        <p className="text-white">PN</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-semibold">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "dark-blue-gradient_text"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "dark-blue-gradient_text"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
