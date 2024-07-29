import { NavLink } from "react-router-dom";
import navIcons from "../../img/icons/nav.svg";

export default function Nav() {
  return (
    <nav className="nav-cnt">
      <ul className="nav-list">
        <li className="nav-i">
          <NavLink to="/" className="nav-lk">
            <svg className="nav-svg" width={24} height={24}>
              <use href={`${navIcons}#home`} />
            </svg>
            Home
          </NavLink>
        </li>
        <li className="nav-i">
          <NavLink to="/about" className="nav-lk">
            <svg className="nav-svg" width={24} height={24}>
              <use href={`${navIcons}#about`} />
            </svg>
            About
          </NavLink>
        </li>
        <li className="nav-i">
          <NavLink to="/rules" className="nav-lk">
            <svg className="nav-svg" width={24} height={24}>
              <use href={`${navIcons}#rules`} />
            </svg>
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
