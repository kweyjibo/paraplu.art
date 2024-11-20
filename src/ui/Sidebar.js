import Windmill from "../components/windmill/Windmill";
import Logo from "./../components/Logo";
import Nav from "./../components/nav/Nav";

function Sidebar() {
  return (
    <aside className="sidebar cell2">
      <div className="sidebar-menu">
        <Logo />
        <Nav />
      </div>
      <div className="sidebar-bottom">
        <Windmill />
      </div>
    </aside>
  );
}

export default Sidebar;
