import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardsProvider } from "./contexts/CardsContext";

import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import Rules from "./pages/Rules";
import PageNotFound from "./pages/PageNotFound";
import CardList from "./components/card/CardList";
import Card from "./components/card/Card";

function App() {
  return (
    <CardsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<CardList />} />
            <Route path="cards/:id" element={<Card />} />
            <Route path="about" element={<About />} />
            <Route path="rules" element={<Rules />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CardsProvider>
  );
}

export default App;
