import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCards } from "../../contexts/CardsContext";

import Spinner from "../Spinner";
import CardActions from "../cardActions/CardActions";
import { Helmet } from "react-helmet-async";
import Error from "../error/Error";

function Card() {
  const { slug } = useParams();
  const { getCardBySlug, currentItem, isLoading, error } = useCards();

  useEffect(() => {
    getCardBySlug(slug); // Fetch the card by its slug
  }, [slug, getCardBySlug]);

  const { image, cardName, keywords, description } = currentItem;

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error} />;

  return (
    <>
      <Helmet>
        <title>{`Paraplu.art - ${cardName}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      <div className="card-cnt">
        <figure className="card">
          <img src={image} alt={cardName} className="card-img" />
        </figure>
        <div className="card-caption">
          <h1 className="card-title">{cardName}</h1>
          <div className="card-desc">{description}</div>
          <section className="card-actions">
            <CardActions title={cardName} image={image} />
          </section>
        </div>
      </div>
    </>
  );
}

export default Card;
