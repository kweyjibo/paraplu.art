import { Outlet } from "react-router-dom";

import Header from "./../blocks/Header";
import Sidebar from "./Sidebar";

export const metadata = {
  title: "Paraplu.art",
  description: "App layout for the site",
  keywords: "layout, app",
};

function AppLayout() {
  return (
    <div className="site">
      <Header />
      <Sidebar />
      <main className="main">
        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default AppLayout;
