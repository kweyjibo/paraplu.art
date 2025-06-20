import CardItem from "./CardItem";
import Spinner from "../Spinner";
import { useCards } from "../../contexts/CardsContext";

function CardList({ limit }) {
  const { items, isLoading, error } = useCards();

  if (isLoading) {
    return <Spinner />;
  }

  const displayedCards = limit ? items.slice(0, limit) : items;

  return (
    <>
      {!items.length ? (
        <p>{error}</p>
      ) : (
        <div className="list">
          {displayedCards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      )}
    </>
  );
}

export default CardList;
