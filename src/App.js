import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import PageNotFound from "./pages/PageNotFound";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import WallpaperList from "./components/wallpapers/WallpaperList";
import CardWallpaper from "./components/wallpapers/CardWallpaper";
import AppProviders from "./contexts/AppProviders";

function App() {
  return (
    <AppProviders>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="cards" element={<CardList />} />
              <Route path="/cards/:slug" element={<Card />} />
              <Route path="wallpapers" element={<WallpaperList />} />
              <Route path="wallpapers/:slug" element={<CardWallpaper />} />
              <Route path="about" element={<About />} />
              <Route path="rules" element={<Rules />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </AppProviders>
  );
}

export default App;
