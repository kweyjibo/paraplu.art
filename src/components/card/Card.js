import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCards } from "../../contexts/CardsContext";

import Spinner from "../Spinner";
import Social from "../social/Social";

function Card() {
  const { id } = useParams();
  const { getCard, currentCard, isLoading } = useCards();

  useEffect(
    function () {
      getCard(id);
    },
    [id, getCard]
  );

  const { image, cardName } = currentCard;

  if (isLoading) return <Spinner />;

  return (
    <div className="card-cnt">
      <figure className="card">
        <img src={image} width="600" alt="fff" />
      </figure>
      <section className="card-actions">
        <Social title={cardName} />
      </section>
    </div>
  );
}

export default Card;
