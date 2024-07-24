import { Outlet } from "react-router-dom";

import Header from "./../blocks/Header";
import Sidebar from "./Sidebar";
import Footer from "../blocks/Footer";

export const metadata = {
  title: "Paraplu.art",
  description: "App layout for the site",
  keywords: "layout, app",
};

function AppLayout() {
  return (
    <div className="grid">
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
