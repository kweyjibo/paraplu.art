import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCards } from "../../contexts/CardsContext";

import Spinner from "../Spinner";
import CardActions from "../cardActions/CardActions";

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
        <img src={image} alt="fff" className="card-img" />
      </figure>
      <div>
        <h1 className="card-title">{cardName}</h1>
        <section className="card-actions">
          <CardActions title={cardName} image={image} />
        </section>
      </div>
    </div>
  );
}

export default Card;
