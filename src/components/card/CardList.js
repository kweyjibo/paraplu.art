import CardItem from "./CardItem";
import Spinner from "../Spinner";
import { useCards } from "../../contexts/CardsContext";

function CardList({ limit }) {
  const { cards, isLoading, error } = useCards();

  if (isLoading) {
    return <Spinner />;
  }

  const displayedCards = limit ? cards.slice(-limit) : cards;

  return (
    <>
      {!cards.length ? (
        <p>{error}</p>
      ) : (
        <div className="list">
          {[...displayedCards].reverse().map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      )}
    </>
  );
}

export default CardList;
