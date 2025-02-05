import { NavLink } from "react-router-dom";
import Icon from "../icon/Icon";

function NavItem({ url, icon, children, additionalClass }) {
  return (
    <NavLink to={url} className={`nav-lk ${additionalClass}`}>
      <Icon res={icon} additionalClass="nav__ic" />
      {children}
    </NavLink>
  );
}

export default NavItem;
