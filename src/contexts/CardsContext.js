import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";
import { toSlug } from "../utils/helpers";

const BASE_URL = "/data";

const CardsContext = createContext();

const initialState = {
  cards: [],
  isLoading: false,
  currentCard: {},
  error: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cards/loaded":
      return {
        ...state,
        isLoading: false,
        cards: action.payload,
      };

    case "card/loaded":
      return { ...state, isLoading: false, currentCard: action.payload };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
function CardsProvider({ children }) {
  const [{ cards, isLoading, currentCard, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    const fetchCards = async () => {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cards.json`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        dispatch({ type: "cards/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data...",
        });
      }
    };

    fetchCards();
  }, []);

  const getCard = useCallback(
    function (id) {
      if (!id) {
        dispatch({ type: "card/loaded", payload: {} });
        return;
      }

      if (Number(id) === currentCard.id) return;

      dispatch({ type: "loading" });

      const card = cards.filter((card) => card.id === id)[0];
      if (card) {
        dispatch({ type: "card/loaded", payload: card });
        return;
      } else {
        dispatch({ type: "rejected", payload: "Card not found" });
      }
    },
    [cards, currentCard.id]
  );

  const getCardBySlug = useCallback(
    (slug) => {
      const card = cards.find((card) => toSlug(card.cardName) === slug);
      if (card) {
        dispatch({ type: "card/loaded", payload: card });
      } else {
        dispatch({ type: "rejected", payload: "Card not found" });
      }
    },
    [cards]
  );

  return (
    <CardsContext.Provider
      value={{ cards, isLoading, currentCard, error, getCard, getCardBySlug }}
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
