import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCards } from "../../contexts/CardsContext";

import Spinner from "../Spinner";

function Card() {
  const { id } = useParams();
  const { getCard, currentCard, isLoading } = useCards();

  useEffect(
    function () {
      getCard(id);
    },
    [id, getCard]
  );

  const { image } = currentCard;

  if (isLoading) return <Spinner />;

  return (
    <div className="card-cnt">
      <div className="card">
        <img src={image} width="600" alt="fff" />
      </div>
    </div>
  );
}

export default Card;
