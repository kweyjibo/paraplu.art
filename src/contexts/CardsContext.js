import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";
import { toSlug } from "../utils/helpers";
import { initialState, createReducer } from "./baseReducer";

const BASE_URL = "/data";

const CardsContext = createContext();

const cardsReducer = createReducer({
  start: "CARDS_FETCH_START",
  success: "CARDS_FETCH_SUCCESS",
  successCurrent: "CARDS_FETCH_SUCCESS_CURRENT",
  error: "CARDS_FETCH_ERROR",
});

function CardsProvider({ children }) {
  const [{ items, isLoading, currentItem, error }, dispatch] = useReducer(
    cardsReducer,
    initialState
  );

  useEffect(function () {
    const fetchCards = async () => {
      dispatch({ type: "CARDS_FETCH_START" });

      try {
        const res = await fetch(`${BASE_URL}/cards.json`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        dispatch({ type: "CARDS_FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "CARDS_FETCH_ERROR",
          payload: "There was an error loading data...",
        });
      }
    };

    fetchCards();
  }, []);

  const getCardBySlug = useCallback(
    (slug) => {
      const card = items.find((card) => toSlug(card.cardName) === slug);
      if (card) {
        dispatch({ type: "CARDS_FETCH_SUCCESS_CURRENT", payload: card });
      } else {
        dispatch({ type: "CARDS_FETCH_ERROR", payload: "Card not found" });
      }
    },
    [items]
  );

  return (
    <CardsContext.Provider
      value={{ items, isLoading, currentItem, error, getCardBySlug }}
    >
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
