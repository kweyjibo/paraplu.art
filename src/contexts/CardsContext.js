import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

const CardsContext = createContext();

function CardsProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCards() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cards`);
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCards();
  }, []);
  return (
    <CardsContext.Provider value={{ cards, isLoading }}>
      {children}
    </CardsContext.Provider>
  );
}

function useCards() {
  const context = useContext(CardsContext);
  if (context === undefined) {
    throw new Error("useCards must be used within a CardsProvider");
  }
  return context;
}

export { CardsProvider, useCards };
