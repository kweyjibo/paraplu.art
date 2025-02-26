import { Outlet } from "react-router-dom";
import Meta from "./../blocks/Meta";
import Header from "./../blocks/Header";
import Sidebar from "./Sidebar";
import Footer from "../blocks/Footer";

function AppLayout() {
  return (
    <div className="grid">
      <Meta />
      <Header />
      <Sidebar />

      <main className="main cell3">
        <section className="content">
          <Outlet />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
