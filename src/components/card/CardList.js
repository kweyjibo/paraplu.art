import CardItem from "./CardItem";
import Spinner from "../Spinner";
import { useCards } from "../../contexts/CardsContext";

function CardList() {
  const { cards, isLoading } = useCards();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cards.length) {
    return <p>No cards found</p>;
  }

  return (
    <div className="list">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;
