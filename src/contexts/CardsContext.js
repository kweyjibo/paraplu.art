import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

const BASE_URL = "http://localhost:9000";

const CardsContext = createContext();

const initialState = {
  cards: [],
  isLoading: false,
  currentCard: {},
  error: "",
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
    async function fetchCards() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cards`);
        const data = await res.json();

        dispatch({ type: "cards/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the cards...",
        });
      }
    }
    fetchCards();
  }, []);

  const getCard = useCallback(
    async function getCard(id) {
      if (Number(id) === currentCard.id) return;

      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cards/${id}`);
        const data = await res.json();
        dispatch({ type: "card/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the card...",
        });
      }
    },
    [currentCard.id]
  );
  return (
    <CardsContext.Provider
      value={{ cards, isLoading, currentCard, error, getCard }}
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
