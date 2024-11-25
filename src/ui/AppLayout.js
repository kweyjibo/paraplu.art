import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Header from "./../blocks/Header";
import Sidebar from "./Sidebar";
import Footer from "../blocks/Footer";

function AppLayout({ title, description, keywords }) {
  return (
    <div className="grid">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://paraplu.art" />
      </Helmet>

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
