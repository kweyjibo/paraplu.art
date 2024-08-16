import NavItem from "./NavItem";
import navIcons from "../../img/icons/nav.svg";

export default function Nav() {
  return (
    <nav className="nav-cnt">
      <ul className="nav-list">
        <li className="nav-i">
          <NavItem url="/" icon={`${navIcons}#home`}>
            Home
          </NavItem>
        </li>
        <li className="nav-i">
          <NavItem url="/about" icon={`${navIcons}#about`}>
            About
          </NavItem>
        </li>
        <li className="nav-i">
          <NavItem url="/rules" icon={`${navIcons}#rules`}>
            Rules
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}
