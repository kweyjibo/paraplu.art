import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCards } from "../../contexts/CardsContext";

import Spinner from "../Spinner";
import Button from "../Button";

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
      <figure className="card">
        <img src={image} width="600" alt="fff" />
      </figure>
      <section className="card-actions">
        <fieldset className="card-actions__group">
          <div>
            <input type="radio" name="action" id="download" checked />
            <label htmlFor="download">Download</label>
          </div>

          <div>
            <input type="radio" name="action" id="print" />
            <label htmlFor="print">Print</label>
          </div>

          <div>
            <Button>OK</Button>
          </div>
        </fieldset>
      </section>
    </div>
  );
}

export default Card;
