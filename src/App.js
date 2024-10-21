import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardsProvider } from "./contexts/CardsContext";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import PageNotFound from "./pages/PageNotFound";
import Card from "./components/card/Card";

function App() {
  return (
    <CardsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
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
