import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardsProvider } from "./contexts/CardsContext";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import PageNotFound from "./pages/PageNotFound";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";

function App() {
  return (
    <CardsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="cards" element={<CardList />} />
            <Route path="/cards/:id" element={<Card />} />
            <Route path="about" element={<About />} />
            <Route path="rules" element={<Rules />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CardsProvider>
  );
}

export default App;
