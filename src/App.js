import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardsProvider } from "./contexts/CardsContext";
import { HelmetProvider } from "react-helmet-async";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import PageNotFound from "./pages/PageNotFound";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import WallpaperList from "./components/wallpapers/WallpaperList";

function App() {
  return (
    <CardsProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="cards" element={<CardList />} />
              <Route path="/cards/:slug" element={<Card />} />
              <Route path="wallpapers" element={<WallpaperList />} />
              <Route path="about" element={<About />} />
              <Route path="rules" element={<Rules />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </CardsProvider>
  );
}

export default App;
