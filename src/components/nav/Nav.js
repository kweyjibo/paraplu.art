import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-i">
          <NavLink to="/" className="nav-lk">
            Home
          </NavLink>
        </li>
        <li className="nav-i">
          <NavLink to="/about" className="nav-lk">
            About
          </NavLink>
        </li>
        <li className="nav-i">
          <NavLink to="/rules" className="nav-lk">
            Rules
          </NavLink>
        </li>
        {/* <NavLink to="/FAQ" className="nav-i">
          FAQ
        </NavLink>
        <NavLink to="/contact" className="nav-i">
          Contact me
        </NavLink> */}
      </ul>
    </nav>
  );
}
