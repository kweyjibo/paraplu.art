import { NavLink } from "react-router-dom";
import Icon from "../icon/Icon";

function NavItem({ url, icon, children }) {
  return (
    <NavLink to={url} className="nav-lk">
      <Icon res={icon} additionalClass="nav__ic" />
      {children}
    </NavLink>
  );
}

export default NavItem;
