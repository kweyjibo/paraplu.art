import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCards } from "../../contexts/CardsContext";

import Spinner from "../Spinner";
import CardActions from "../cardActions/CardActions";
import { Helmet } from "react-helmet-async";
import Error from "../error/Error";

function Card() {
  const { id } = useParams();
  const { getCard, currentCard, isLoading, error } = useCards();

  useEffect(
    function () {
      getCard(id);
    },
    [id, getCard]
  );

  const { image, cardName, keywords, description } = currentCard;

  if (isLoading) return <Spinner />;

  if (Object.keys(currentCard).length === 0) return <Error message={error} />;

  return (
    <>
      <Helmet>
        <title>{`Paraplu.art - ${cardName}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

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
    </>
  );
}

export default Card;
